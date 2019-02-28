const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('index');
});

router.get('/singup', (req, res, next) => {
    res.render('singup');
});

router.post('/singup', (req, res, next) => {
    console.log(req.body);
    res.send('Recebido');
});

router.get('/singin', (req, res, next) => {

});

router.post('/singin', (req, res, next) => {

});

module.exports = router;