// Variable Definition
const path = require('path');
const router = require('express').Router();

// Return the notes.html file
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
});

// Return the index.html file
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

module.exports = router;