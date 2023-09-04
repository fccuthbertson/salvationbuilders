const express = require('express');
const router = express.Router();
const fs = require('fs')
const path = require('path')

/* GET users listing. */
router.get('/:projectName', function(req, res, next) {
    const projectName = req.params.projectName;
    const projectDir = path.join(__dirname, '../public/images/projects/' + projectName)
    fs.readdir(projectDir, (err, files) => {
        if(err) {
            return res.status(500).send('could not read project directory' + projectName)
        }

        const imagefiles = files.filter(file => {
            const fileExtension = path.extname(file).toLowerCase()
            return ['.jpg', '.jpeg', '.png'].includes(fileExtension)
        })
        res.json(imagefiles)
    })
});

module.exports = router;
