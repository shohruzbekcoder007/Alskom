const express = require('express');
const router = express.Router();

router.get('/',(req,res) =>{
    res.render('index', {
        file: "/css/main.css", 
        img: "/imgs/welcom.jpg",
        imgPasport: "/imgs/pasport.jpg",
        title: "my portfolio", 
        greeting: "home page", 
        number: 1
    });
});

router.get('/news',(req,res) =>{
    res.render('news', {file: "/css/main.css", title: "my portfolio", greeting: "news page", number: 2});
});

module.exports = router;