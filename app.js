const express = require('express');
const path = require('path');

const port = process.env.PORT || 8000;

const app = express();

app.use('/static',express.static('static'));

app.get("/", (req,res)=>{

    res.status(200).sendFile(path.join(__dirname,'views','/index.html'));
});

app.get('/*',(req,res)=>{

    res.statusCode = 404;
    res.type('text/html');
    res.write('<h1>404 Page Not Found!</h1>');
    res.send();
});

app.listen(port, ()=>{

    console.log(`Website is Running at port: ${port}`);
});

