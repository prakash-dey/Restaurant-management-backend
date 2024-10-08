
var validator = require('validator');

const validateSignupData =  (data)=>{
    let errors = {};

    // Validate and sanitize firstName
    if (!data.firstName || !validator.isLength(data.firstName, { min: 2, max: 50 })) {
        errors.firstName = 'First name must be between 2 and 50 characters.';
    }

    // Validate and sanitize lastName
    if (!data.lastName || !validator.isLength(data.lastName, { min: 2, max: 50 })) {
        errors.lastName = 'Last name must be between 2 and 50 characters.';
    }

    // Validate gender (only allow male, female, other)
    const allowedGenders = ['male', 'female', 'other'];
    if (!data.gender || !allowedGenders.includes(data.gender.toLowerCase())) {
        errors.gender = 'Gender must be either male, female, or other.';
    }

    // Validate and sanitize restaurantName
    if (!data.restaurantName || !validator.isLength(data.restaurantName, { min: 2, max: 100 })) {
        errors.restaurantName = 'Restaurant name must be between 2 and 100 characters.';
    }

    // Validate email
    if (!data.email || !validator.isEmail(data.email)) {
        errors.email = 'Invalid email format.';
    }

    // Validate password (min length, contains uppercase, lowercase, number, special character)
    if (!data.password || !validator.isStrongPassword(data.password, {
        minLength: 6,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1
    })) {
        errors.password = 'Password must be at least 6 characters long and contain at least one uppercase letter, one number, and one special character.';
    }

    // Validate phoneNumber (optional length and digit checking)
    if (!data.phoneNumber || !validator.isMobilePhone(data.phoneNumber, 'en-IN')) {
        errors.phoneNumber = 'Invalid phone number format. Must be a valid Indian phone number.';
    }
    if (!data.city || !validator.isLength(data.city, { min: 2, max: 100 })) {
        errors.city = 'City name must be between 2 and 100 characters.';
    }
    if (!data.state || !validator.isLength(data.state, { min: 2, max: 100 })) {
        errors.phoneNumber = 'State name must be between 2 and 100 characters.';
    }


    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };

}
module.exports = {validateSignupData}