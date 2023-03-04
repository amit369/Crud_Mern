const express = require('express');
const app = express();

app.get('/', (req,res)=> {
    console.log("In the App Folder");
    res.send("Hello World");
})

app.listen(5000);