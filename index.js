const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose.connect(process.env.MONGO_LOGIN , {useNewUrlParser:true , useCreatrIndex:true})
.then(()=>console.log("connected to databse"))
.catch(err=>console.log(err))

const restaurant = require('./controllers');

app.use('api/restaurant' , restaurant)

const port = 3000;

app.listen(port, ()=>{
    console.log(`listening at port 3000`);
})
