var express = require('express');
var router = express.Router();
const db = require('../models')
/* GET notes page. */
router.get('/', async function(req, res, next) {
  const user = await db.User.findByPk(req.session.user.id,{
    include: [{
      model: db.Note, 
      include: db.Archive
    }, db.Archive],
    order: [[db.Note, 'createdAt', 'DESC']]
  })
  res.render('notes', {
    locals: {
      user,
      notes: user.Notes,
      archives: user.Archives
    }
  });

  // console.log('ARHIVES =====',user.Archives)
  // console.log('notes=======', user.Notes)
});


//localhost:3000/notes
router.post('/', async (req, res) => {
    //checks for a text in the post message box
    if (!req.body.category) {
      return res.status(422).render('error', {
        locals: { error: 'please write a note' }
      });
    }


    const newNote = await db.Note.create({
        noteMessage: req.body.noteMessage,
        author: `${req.session.user.firstName} ${req.session.user.lastName}`,
        public: true,
        UserId: req.session.user.id,
        ArchiveId: req.body.category
      })
    res.redirect('/notes');

     // Finds "note" in database.
//  const note = await db.Note.findAll({
//     where: {
//       category: req.body.category,
//       noteMessage: req.body.noteMessage
//     }
//   })


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

router.post('/:id/delete', async (req,res) => {
  const note = await db.Note.findByPk(req.params.id)
  await note.destroy()
  res.redirect('/notes');
})

router.post('/:id/edit', async (req, res) => {
  const editNote = await db.Note.findByPk(req.params.id)
  editNote.ArchiveId = req.body.category;
  editNote.noteMessage = req.body.noteMessage;
  await editNote.save()
  res.redirect('/notes');
})

module.exports = router;
