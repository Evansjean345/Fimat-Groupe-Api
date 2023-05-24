const mongoose = require("mongoose");
const { isEmail } = require("validator");
const orderSchema = new mongoose.Schema({
  recipient: {
    name: { type: String, required: true, minLenght: 3, maxLenght: 55 },
    phone: { type: String, required: true, minLenght: 3, maxLenght: 55 },
    address: { type: String, required: true, minLenght: 3, maxLenght: 55 },
  },
  delivery_person: {
    name: { type: String, required: true, minLenght: 3, maxLenght: 55 },
    phone: { type: String, required: true, minLenght: 3, maxLenght: 55 },
    address: { type: String, required: true, minLenght: 3, maxLenght: 55 },
  },
  destination: {
    type: String,
    required: true,
    minLenght: 3,
    maxLenght: 55,
  },
  payement: {
    type: String,
    required: true,
    minLenght: 3,
    maxLenght: 55,
  },
  totalCost: {
    type: String,
    required: true,
    minLenght: 3,
    maxLenght: 55,
  },
  status: {
    type: Boolean,
    default: false,
  },
  invoiceStatus: {
    type: Boolean,
    default: false,
  },
  tracking: {
    type: String,
  },
  date: {
    type: String,
  },
});

module.exports = mongoose.model("Order", orderSchema);
