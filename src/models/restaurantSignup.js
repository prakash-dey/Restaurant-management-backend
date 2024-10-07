const mongoose = require("mongoose");

const restaurantSchema = mongoose.Schema({
    firstName :{
        type: String,
        required: true,
        minLength: 1,
        maxLength: 50,
        lowercase : true,
    },
    lastName :{
        type: String,
        required: true,
        minLength: 1,
        maxLength: 50,
        lowercase : true,
    },
    gender:{
        type:String,
        enum :{
            values:["male","female","other","notSpecified"],
            message:`${VALUE} is invalid option`
        },
        lowercase : true,
    },
    restaurantName:{
        type:String,
        required: true,
        minLength:2,
        maxLength:75,
        lowercase : true,
    },
    city:{
        type:String,
        required: true,
        minLength:2,
        maxLength:75,
        lowercase : true,

    },
    state:{
        type:String,
        required: true,
        minLength:2,
        maxLength:75,
        lowercase : true,
    },
    email:{
        type:String,
        required: true,
        minLength:2,
        maxLength:75,
        lowercase : true,
        unique: true,
    },
    password:{
        type:String,
        required: true,
    },
    phoneNumber:{
        type:String,
        required: true,
        unique:true
    },
},{timestamps:true});

restaurantSchema.pre("save",async function(next){
    const user = this;

    // Check if password is modified or is new
    if (user.isModified('password')) {
      try {
        // Generate a salt and hash the password
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
      } catch (error) {
        return next(error);
      }
    }
    next();
}); 

restaurantSchema.methods.isValidPassowrd = async function(cb){
    try {
        return await bcrypt.compare(candidatePassword, this.password);
      } catch (error) {
        throw new Error(error);
      }
}

const restaurantSignupModel = mongoose.model(restaurantSchema);

module.exports = {restaurantSignupModel};
