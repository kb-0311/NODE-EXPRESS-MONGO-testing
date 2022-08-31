const Restaurant = require('../models/restaurantModel')
const createRestaurant = require('./restaurantControllers')
describe('Creating Restaurant', () => { 

    it('should not create a restaurant and throw error', () => {
        Restaurant.findOne = jest.fn().mockReturnValueOnce({
            name: "Amy's"
        });

        Restaurant.prototype.save = jest.fn(()=>{})

         expect(createRestaurant("Amys" , "Sydnes" , "Persian")).rejects.toThrowError()
    });
    

})

