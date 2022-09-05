const Restaurant = require('../models/restaurantModel')
const RestaurantController = require("./restaurantControllers");
const createRestaurant = RestaurantController.create;
const updateRestaurant = RestaurantController.update; 
const readRestaurant = RestaurantController.read;

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
     it('should not update an unexisting restaurant and throw an error', () => {
        Restaurant.findOne = jest.fn().mockReturnValueOnce({
        });

        Restaurant.prototype.save = jest.fn(()=>{})

        expect(updateRestaurant("x" ,"y" , "z")).rejects.toThrowError();

     });

     it('should update an existing resturant', () => {
        Restaurant.findOne= jest.fn().mockReturnValueOnce({
            name:"x"
        })
        const restaurant = {
            name:"x",
            location:"y",
            cuisine:"z"
    
        }

        //Restaurant.prototype.save = jest.fn(()=>{});

        expect(updateRestaurant("x" ,"y" ,"z")).resolves.toStrictEqual({
            restaurantName:restaurant.name,
            restaurantCuisine:restaurant.cuisine,
            restaurantLocation:restaurant.location
        })
     });
})

describe('Read Restaurant Data ', () => {

    it('should expect to not give a null value', () => {
        Restaurant.find = jest.fn().mockReturnValueOnce([
            {
                name : "a",
                location:"b",
                cuisine:"c",
            },
            {
                name : "d",
                location:"e",
                cuisine:"f",
            }
        ])

        // Restaurant.prototype.save = jest

        expect(readRestaurant()).not.toBe(null);

        
    });
    
    it('should expect to throw a null error', () => {

        Restaurant.find = jest.fn().mockReturnValueOnce(null);

        expect(readRestaurant()).rejects.toThrowError();
        
    });
 })

 

