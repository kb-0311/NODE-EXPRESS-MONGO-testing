const Restaurant = require('../models/restaurantModel')
const createRestaurant = require('./restaurantControllers')
describe('Creating Restaurant', () => { 

    it('should not create a restaurant and throw error', () => {
        Restaurant.findOne = jest.fn().mockReturnValueOnce({
            name: "Amy's"
        });

        Restaurant.prototype.save = jest.fn(()=>{})

         expect(createRestaurant("Amy's" , "Sydnes" , "Persian")).rejects.toThrowError()
    });

    const restaurant = {
        name:"abs",
        location:"def",
        cuisine:"ghi"

    }
    
    it('should create a unique restaurant', () => {
        Restaurant.prototype.save = jest.fn(()=>{})
        expect(createRestaurant("abs" , "def" , "ghi")).resolves.toStrictEqual({
            restaurantName:restaurant.name,
            restaurantCuisine:restaurant.cuisine,
            restaurantLocation:restaurant.location
        })
    });

})

