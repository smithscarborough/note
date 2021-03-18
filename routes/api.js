var express = require('express');
var router = express.Router();
const db = require('../models');

router.get('/archive/:archiveid',async function(req, res, next) {
    const archive = await db.Archive.findByPk(req.params.archiveid, {
        include: db.Note,
        order: [[db.Note, 'createdAt', 'DESC']]

    })
    res.json(archive)
});

module.exports = router;
