const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      trim: true,
    },
    lastName: {
      type: String,
      trim: true,
    },
    companyName: {
      type: String,
      trim: true,
    },
    address: {
      type: String,
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

      minlength: 10,
      maxlength: 10,
    },
    userType: {
      type: String,

      trim: true,
    },
    profileImg: {
      type: String,
    },
    skills: [
      {
        name: String,
        level: {
          type: String,
          enum: ["beginner", "intermediate", "advanced"],
        },
        approval: {
          type: Boolean,
          default: false,
        },
      },
    ],
    college_name: {
      type: String,

      trim: true,
    },
    enrollment_no: {
      type: String,
    },
    branch: {
      type: String,
    },
    year: {
      type: Number,
    },
    admission_year: {
      type: Number,
    },
    cgpa: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
