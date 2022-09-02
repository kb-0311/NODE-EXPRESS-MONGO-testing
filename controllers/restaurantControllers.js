const Restaurant = require("../models/restaurantModel");

module.exports = {
    create :async function createRestaurant (name,location,cuisine){
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

    
    } ,
    update: async function updateRestaurant(name ,location , cuisine) {
        try {
            const exists = Restaurant.findOne({name});

            if (!exists) {
                throw new Error('Restaurant with that name does not exist');

            }

            const restaurantUpdated = Restaurant.findByIdAndUpdate(exists._id ,{
                name,
                location,
                cuisine
            })

            await restaurantUpdated.save();

            return {
                restaurantName:restaurantUpdated.name,
                restaurantCuisine: restaurantUpdated.cuisine,
                restaurantLocation:restaurantUpdated.location
                
               
            }

        } catch (error) {
            return res.status(500).json({
                error : error.message
            })
            
        }
        
    }
}