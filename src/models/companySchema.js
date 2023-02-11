const mongoose = require("mongoose");

// create company Schema
const companySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 7,
  },
  contactNo: {
    type: Number,
    required: true,
    minlength: 10,
    maxlength: 10,
  },
  address: {
    type: String,
    required: true,
    trim: true,
  },
});



const Company = mongoose.model("Company", companySchema);
module.exports = Company;
