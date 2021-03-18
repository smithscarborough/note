var express = require('express');
var router = express.Router();
const db = require('../models')


router.get('/', async (req, res) => {
    const data =  await db.Archive.findAll({
    where: {
        UserId: req.session.user.id
    }
    })
    res.json(data)
  });


  router.post('/', async (req, res) => {
    //checks for a text in the post message box
    if (!req.body.category) {
      return res.status(422).render('error', {
        locals: { error: 'please write a note' }
      });
    }

try {
    const newArchive = await db.Archive.create({
        title: req.body.category,
        public: true,
        UserId: req.session.user.id,
        // ArchiveId: req.session.user.id
      })
    
      res.redirect('/Notes');
} catch (error) {
    res.status(422).json({
        error: "couldnt create new category"
    })
}

})
module.exports = router