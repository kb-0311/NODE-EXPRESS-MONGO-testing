const Restaurant = require('../models/restaurantModel')
const RestaurantController = require("./restaurantControllers");
const createRestaurant = RestaurantController.create;
const updateRestaurant = RestaurantController.update; 

describe('Creating Restaurant', () => { 
    it('should not create a restaurant and throw error', () => {
        Restaurant.findOne = jest.fn().mockReturnValueOnce({
            name: "Amy's"
        });

        Restaurant.prototype.save = jest.fn(()=>{})

         expect(createRestaurant("Amy's" , "Sydnes" , "Persian")).rejects.toThrowError()
    });


    
    it('should create a unique restaurant', () => {
        const restaurant = {
            name:"abs",
            location:"def",
            cuisine:"ghi"
    
        }
        Restaurant.prototype.save = jest.fn(()=>{})
        expect(createRestaurant("abs" , "def" , "ghi")).resolves.toStrictEqual({
            restaurantName:restaurant.name,
            restaurantCuisine:restaurant.cuisine,
            restaurantLocation:restaurant.location
        })
    });

})

describe('Update Existing Restaurant', () => {
     it('should not create a restaurant and throw an error', () => {
        Restaurant.findOne = jest.fn().mockReturnValueOnce({
        });

        Restaurant.prototype.save = jest.fn(()=>{})

        expect(updateRestaurant("x" ,"y" , "z")).rejects.toThrowError();

     });
})

