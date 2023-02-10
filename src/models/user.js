const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
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
      maxlength: 10
    },
    userType: {
      type: String,
      required: true,
      trim: true,
    },
    profileImg: {
      type: String,

    },
    skills: {
      type: Array,
      default: []
    },
    college_name: {
      type: String,
      required: true,
      trim: true
    },
    enrollment_no: {
      type: String,
      required: true,
    },
    branch: {
      type: String,
      required: true
    },
    year: {
      type: Number,
      required: true

    },
    admission_year: {
      type: Number,
      required: true,
    }, 
    cgpa: {
      type: Number,
      required: true,
    }
  },
  {
    timestamps: true,
  }

);

const User = mongoose.model("User", userSchema);
module.exports = User;
