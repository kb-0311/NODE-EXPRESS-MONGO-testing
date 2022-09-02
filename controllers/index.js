const express = require("express");
const Restaurant = require("../models/restaurantModel");
const {createRestaurant ,updateRestaurant} = require("./restaurantControllers");
const router = express.Router();

router.post('/create' , (req,res)=>{
    const {name, location , cuisine} = req.body; 

    const restaurant = await createRestaurant(name,cuisine,location);
})

router.put('/update' , (req,res)=>{
    const {name , location , cuisine} = req.body;

    const restaurant = await updateRestaurant(name,cuisine,location);

})
module.exports=router;