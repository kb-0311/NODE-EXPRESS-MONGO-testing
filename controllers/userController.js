const User = require("../models/userModel");

module.exports = {
    create : async function createUser(name , email ,password) {
        
        try {
            const exists =await User.findOne({email});

            if (exists) {
                throw new Error("user already exists");
            }
    
            const user = new User({
                name:name ,
                email : email,
                password:password,
            })
            await user.save();
            return {
                userName :user.name,
                userEmail : user.email,
                userPassword : user.password
            }
            
        } catch (error) {
            throw new Error (error);
        }
       
    }

}