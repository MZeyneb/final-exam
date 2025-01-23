const mongoose = require('mongoose')
const { Schema } = mongoose;

const foodSchema = new Schema({
  image: String, 
  name: String,
  price: Number

});

const modelFood = mongoose.model("Foods", foodSchema)

module.exports = modelFood