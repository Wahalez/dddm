const mongoose = require("mongoose");
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
  Category,
} = require("./schemas");

async function _getAllUsers() {
  const query = await User.find({});
  console.log(query);
  return query;
}

async function _getAllProducts() {
  const query = await Product.find({});
  console.log(query);
  return query;
}

async function addProduct(
  name,
  description,
  category_id,
  platform_id,
  vendor_id,
  stock,
  image,
  pricing
) {
  try {
    const newProduct = new Product({
      name: name,
      description: description,
      category_id: new ObjectId(category_id),
      platform_id: new ObjectId(platform_id),
      vendor_id: new ObjectId(vendor_id),
      stock: stock,
      image: image,
      pricing: pricing,
    });
    console.log(newProduct);
    const addedProduct = await newProduct.save();
    console.log("Product added successfully:", addedProduct);
    return addedProduct;
  } catch (error) {
    console.error("Error adding product:", error);
    throw error;
  }
}

module.exports = {
  getAllUsers: _getAllUsers,
  getAllProducts: _getAllProducts,
  addProduct: addProduct,
};
