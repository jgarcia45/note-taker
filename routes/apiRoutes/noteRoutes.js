// Variable Definition
const router = require('express').Router();
const fs = require('fs');

// Reads the db.json file and return all the saved notes as JSON
router.get('/notes', (req, res) => {
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        const notes = JSON.parse(data);
        res.json(notes);
    });
});

// Receives new note to save on the request body, add it to the db.json file, and return the new note to the client.
router.post('/notes', (req, res) => {
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        const notes = JSON.parse(data);
        const note = req.body;
        const id = (notes.length).toString();
        note.id = id;
        notes.push(note);

        fs.writeFileSync('db/db.json', JSON.stringify(notes));

        res.json(notes);
    });
});

// Deletes any note saved onto the db.json file
router.delete('/notes/:id', (req, res) => {
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        const notes = JSON.parse(data);
        const id = req.params.id;
        const deleted = notes.filter((target) => target.id != id);

        fs.writeFileSync('./db/db.json', JSON.stringify(deleted));

        res.json(notes);
    });
});

module.exports = router;