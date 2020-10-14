const express = require('express');
const router = express.Router();
const path = require('path');
const Heroes = require('../public/javascripts/heroes.json');

/* GET heroes home page. */
router.get('/', function(req, res, next) {
    res.send(Heroes);
});

router.get('/:id', function(req, res, next){
    let idHero = req.params.id
    for(let hero of Heroes){
        if(hero.id == idHero){
            res.render('heroes', {NOMBRE: hero.nombre, PROFESION: hero.profesion })
        }
    }
    res.send('no tenemos ese heroe')
});

module.exports = router;
