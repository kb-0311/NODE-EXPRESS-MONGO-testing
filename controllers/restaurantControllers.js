const Restaurant = require("../models/restaurantModel");

module.exports =  async function createRestaurant (name,location,cuisine){
    try {
        const exists = Restaurant.findOne({name});

        if (exists) {
            throw new Error(`A restaurant called ${name} Already exists`)
        }

        const restaurant = new Restaurant({
            name ,
            location,
            cuisine
        })

        await restaurant.save();

        return {
            restaurantName:restaurant.name,
            restaurantCuisine:restaurant.cuisine,
            restaurantLocation:restaurant.location
        }
    } catch (error) {
        return res.status(500).json({
            error : error.message
        })
    }

    
}