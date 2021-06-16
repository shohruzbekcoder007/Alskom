const express = require('express');
const app = express();

app.use(express.static('../static'));
app.set("view engine", "pug");

const port = process.env.PORT || 8080;

const routers = require('./router')

app.use('/', routers);

app.listen(port, () => {
    console.log(port + "-portni tinglashni boshladim!!!")
})