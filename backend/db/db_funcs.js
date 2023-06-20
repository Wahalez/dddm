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
const { ObjectId } = require('mongodb');

async function _getAllUsers() {
    const query = await User.find({});
    console.log(query);
    return query;
}

async function addUser(username, password, type, fname, lname, email, phone, birthday, address) {
    try {
        const newUser = new User({
      username: username,
      password: password,
      type: new ObjectId,
      fname: fname,
      lname: lname,
      email: email,
      phone: phone,
      birthday: birthday,
      address: address,
      join_date: new Date()
    });
    console.log(newUser);
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
