const Restaurant = require("../models/restaurantModel");

module.exports = {
    create :async function createRestaurant (name,location,cuisine){
        try {
            const exists = await Restaurant.findOne({name});

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
    update: async function updateRestaurant(name , location , cuisine) {
        try {
            let exists = await Restaurant.findOne({name});

            if (!exists.name) {
                throw new Error('Restaurant with that name does not exist');

            }
            
            if (name) {
                exists.name=name
            }
            if (location) {
                exists.location=location;
            }
            if (cuisine) {
                exists.cuisine=cuisine
            }


            const restaurantUpdated = exists;

             Restaurant.findByIdAndUpdate(exists._id , restaurantUpdated);


            

            return {
                
                restaurantName:restaurantUpdated.name,
                restaurantCuisine: restaurantUpdated.cuisine,
                restaurantLocation:restaurantUpdated.location
                
               
            }

        } catch (error) {

            throw new Error(error.message)
            // return res.status(500).json({
            //     error : error.message
            // })            
        }
        
    } ,
    read :async function getAllRestaurants() {
        try {
            const restaurants = Restaurant.find();
            if (!restaurants) {
                throw new Error("no restaurants exists");
            }
            return restaurants
        } catch (error) {
            throw new Error(error);
        }
    }
}