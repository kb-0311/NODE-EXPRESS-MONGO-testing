const express = require("express");
const Restaurant = require("../models/restaurantModel");
const {createRestaurant} = require("./restaurantControllers");
const router = express.Router();

router.post('/' , (req,res)=>{
    const {name, location , cuisine} = req.body; 

    const restaurant = await createRestaurant(name,cuisine,location);
})

module.exports=router;