const Restaurant = require("../models/restaurantModel");

module.exports = async function createRestaurant(name,location,cuisine) {
    try {
        const exists = Restaurant.findOne({name});

        if (exists) {
            return new Error(`A restaurant called ${name} Already exists`)
        }

        const restaurant = new Restaurant({
            name ,
            location,
            cuisine
        })

        await restaurant.save();

        return {
            restaurant:restaurant
        }
    } catch (error) {
        return new Error(error);
    }

    
}