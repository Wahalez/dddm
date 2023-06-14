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

module.exports = {
    getAllUsers: _getAllUsers
}
