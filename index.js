const express = require('express');
const allData=require('./data.json')

const app = express();


app.get("/",(req,res)=>{
    res.json({message:"hello server"})
})
app.get('/alldata',(req,res)=>{
    res.send(allData)
})



app.listen(5000, () => {
    console.log('server is runing 5000');
})
