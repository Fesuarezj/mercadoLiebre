const express = require('express');
const path = require("path");
const app = express()
const port = 3030

const publicPath = path.resolve(__dirname, './public');
app.use( express.static(publicPath) );

app.listen(port, ()=> {
    console.log(`Servidor Express ejecutando Ok en el puerto : ${port}`);
});

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'));
});
