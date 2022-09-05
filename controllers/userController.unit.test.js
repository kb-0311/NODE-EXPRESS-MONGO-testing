const User = require("../models/userModel");
const userControllers = require("./userController");
const createUser = userControllers.create;

describe('User Registration', () => {

    it('should not create a user and throw a new error ', () => {
        User.findOne = jest.fn().mockReturnValueOnce({
            email:"1@2.com"
        })


        expect(createUser("ab" , "1@2.com" , "password")).rejects.toThrowError();


    });
    
    it('should create a new user with given credentials', () => {

        User.findOne=jest.fn().mockReturnValueOnce(null);


        let user  = {
            name : "ab",
            email: "1@2.com",
            password : "password"
        }
        User.prototype.save = jest.fn(()=>{})


        expect(createUser("ab", "1@2.com" , user.password)).resolves.toStrictEqual({
            userName :user.name,
            userEmail : user.email,
            userPassword : user.password
        })
        
    });

});