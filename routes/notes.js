var express = require('express');
var router = express.Router();
const db = require('../models')
/* GET notes page. */
router.get('/', async function(req, res, next) {
  const notes = await db.Note.findAll({
    where: {
      UserId: req.session.user.id
    }
  })
  res.render('notes', {
    locals: {
      notes
    }
  });
});



router.post('/', async (req, res) => {
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
        UserId: req.session.user.id,
        // ArchiveId: req.session.user.id
      })
    res.redirect('/notes');

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
