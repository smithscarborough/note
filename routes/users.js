var express = require('express');
var router = express.Router();
const db = require("../models")
const bcrypt = require('bcrypt');

// router.get('/', async function(req, res, next) {
//   const users = await db.User.findAll({
//     where: {
//       UserId: req.session.user.id
//     }
//   })
//   res.render('notes', {
//     locals: {
//       users
//     }
//   });
// });

/* GET users listing. */
router.get('/', function (req, res, next) {
  db.User.findAll()
    .then(users => {
      res.json(users)
    })
});


router.post('/register', async (req, res) => {
  //check if user exists
  const users = await db.User.findAll({
    where: {
      email: req.body.email,

    }
  })

  //if user exists, they already signed up, so send error
  if (users.length) {
    return res.status(401).render('error', { locals: { error: 'not logged in' } })

  }
  //check name, email, gamerTag, password
  //if not all data included, send error
  if (!req.body.email || !req.body.firstName || !req.body.lastName || !req.body.psw2 || !req.body.password) {
    res.status(401).render('error', { locals: { error: 'not logged in' } })
  }

  //hash password
  const hash = await bcrypt.hash(req.body.password, 10)
  //ergister user
  const newUser = await db.User.create({
    email: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    password: hash
  })
  
  // res.json(newUser);
  req.session.user = newUser
  res.redirect('/notes')


  // const registerLogin = ((req, res) => {
  //   req.body.newUser
  //   res.redirect('/notes')
  // })
  // registerLogin()
})

router.post('/login', async (req, res) => {
  //checks for email and password are being entered in the form
  if (!req.body.email || !req.body.password) {
    return res.status(422).render('error', {
      locals: { error: 'please include all required fields.' }
    });
  }

  // Finds "user" in database.
 const user = await db.User.findOne({
   where: {
     email: req.body.email
   }
 })
 //if no user is in dataBase send error message
if (!user)
return res.status(404).render('error', { locals: {error: 'User not found.'}
})
//if user is in the dataBase 
const succesfulLogin = await bcrypt.compare(req.body.password, user.password)
// Error message if wrong email and password.
if(!succesfulLogin) {
  return res.status(404).render('error', {locals: {error: "Wrong email or Password."}})
}

// gets login from sequelize database

req.session.user = user;


res.redirect('/Notes')
})

router.get('/logout', (req, res) => {
  // clear user data on session to logout
  req.session.user = null

  res.redirect('/')
})

module.exports = router;
