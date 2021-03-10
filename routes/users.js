var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.post('/#', async (req, res) => {
  //check if user exists
  const users = await db.User.findAll({
    where: {
      email: req.body.email
    }
  })
    
  //if user exists, they already signed up, so send error
  if(users.length) {
    return res.status(401).render('error', { locals: { error: 'not logged in' }})
    
  }
  //check name, email, gamerTag, password
  //if not all data included, send error
  if(!req.body.email || !req.body.firstName || !req.body.lastName  || !req.body.password) {
    return res.status(401).render('error', { locals: { error: 'not logged in' }})
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

  res.json(newUser);
})

module.exports = router;
