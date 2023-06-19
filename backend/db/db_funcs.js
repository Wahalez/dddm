const mongoose = require('mongoose');
const {
    User,
    Product,
    Platform,
    Order,
    Coupon,
    Status,
    UserType,
    WishList,
    Vendor,
    Category
} = require('./schemas');

async function _getAllUsers() {
    const query = await User.find({});
    console.log(query);
    return query;
}

async function addUser(username, password, fname, lname, email, phone, birthday, address) {
    try {
        const newUser = new User({
            username,
            password,
            email,
            fname,
            lname,
            phone,
            birthday,
            address,
            join_date: new Date()
        });

        const savedUser = await newUser.save();
        console.log('User registered successfully:', savedUser);
        return savedUser;
    } catch (error) {
        console.error('Error registering user:', error);
        throw error;
    }
}

module.exports = {
    getAllUsers: _getAllUsers,
    addUser: addUser
};
