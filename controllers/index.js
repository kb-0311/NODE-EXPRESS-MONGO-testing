const express = require("express");
const Restaurant = require("../models/restaurantModel");
const router = express.Router();
const RestaurantController = require("./restaurantControllers");
const createRestaurant = RestaurantController.create;
const updateRestaurant = RestaurantController.update; 


router.post('/create' , (req,res)=>{
    const {name, location , cuisine} = req.body; 

    const restaurant = createRestaurant(name,location,cuisine);
})

router.put('/update' , (req,res)=>{
    const {name , location , cuisine} = req.body;

    const restaurant = updateRestaurant(name,cuisine,location);


})
module.exports=router;