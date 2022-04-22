const router = require('express').Router();
const fs = require('fs');
const { array } = require('yargs');

router.get('/notes', (req, res) => {
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        const notes = JSON.parse(data);
        res.json(notes);
    });
});

router.post('/notes', (req, res) => {
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        const notes = JSON.parse(data);
        const note = req.body;
        const id = (notes.length).toString();
        note.id = id;
        notes.push(note);

        fs.writeFileSync('db/db.json', JSON.stringify(notes), (err, data) => {
            //fdsafd
        });

        res.json(notes);
    });
});

router.delete('/notes/:id', (req, res) => {
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        const notes = JSON.parse(data);
        const id = req.params.id;
        const newId = 0;

        const deleted = notes.filter((target) => target.id != id);

        fs.writeFileSync('./db/db.json', JSON.stringify(deleted), (err, data) => {
            //
        });

        res.json(notes);
    });
});

module.exports = router;