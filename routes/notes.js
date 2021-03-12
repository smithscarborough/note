var express = require('express');
var router = express.Router();
const db = require('../models')
/* GET notes page. */
router.get('/', function(req, res, next) {
  res.render('notes');
});



router.post('/api/create/', async (req, res) => {
    //checks for a text in the post message box
    if (!req.body.noteMessage || !req.body.category) {
      return res.status(422).render('error', {
        locals: { error: 'please write a note' }
      });
    }


    const newNote = await db.Note.create({
        noteMessage: req.body.noteMessage,
        author: `${req.session.user.firstName} ${req.session.user.lastName}`,
        category: req.body.category,
        public: true,
        UserId: req.session.user.id
      })
    res.json(newNote);

     // Finds "note" in database.
//  const note = await db.Note.findAll({
//     where: {
//       category: req.body.category,
//       noteMessage: req.body.noteMessage
//     }
//   })


// req.session.note = newNote;
})

router.get('/user/allPost', (req,res) => {
   db.Note.findAll({
       where: {
           UserId: req.session.user.id,
       },
   }).then(note => {
       res.json(note)
   })
})



module.exports = router;
