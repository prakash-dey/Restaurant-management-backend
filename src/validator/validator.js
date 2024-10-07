
var validator = require('validator');

const validateSignupData = (data)=>{
    const {firstName, lastName, gender, restaurantName, city, state, phoneNumber, email, password } = data;

    if(!validator.isEmpty(firstName))throw Error("First name is empty");
    if(!validator.isEmpty(lastName))throw Error("Last name is empty");
    if(!validator.isEmpty(gender))throw Error("Gender is empty");
    if(!validator.isEmpty(restaurantName))throw Error("Restaurant name is empty");
    if(!validator.isEmpty(city))throw Error("City name is empty");
    if(!validator.isEmpty(state))throw Error("State name is empty");
    if(!validator.isMobilePhone(phoneNumber))throw Error("Invalid phone number");
    if(!validator.isEmail(email)) throw Error("Invalid email");
    if(!validator.isStrongPassword(password))throw Error("Weak password");

}