const express = require("express");
var app = express();

app.get('/home',async(req,res)=>{
    res.send('Have you read the question?');
})

app.get('/head',async(req,res)=>{
    res.send("<a href='https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods'>Click here</a>");
})

app.head('*', async (req, res) => {
    res.set("hint","great_job_but_you_need_to_PUT_it_together");
    res.send('done');
})

app.put('/', async (req, res) => {
    res.json({"flag": "youdidit"})
})

let port = process.env.PORT || 8080;

app.listen(port,()=>{
console.log("Listening to port "+port);
})