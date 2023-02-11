const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const collegeSchema = new mongoose.Schema(
  {
    collegeName: {
      type: String,
      required: true,
      trim: true,
    },
    address: {
      type: String,
      required: true,
      trim: true,
    },
    contactNo: {
      type: Number,
      required: true,
      minlength: 10,
      maxlength: 10,
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
    courses: [
      {
        type: Array,
        required: true,
      },
    ],
    students: [
      {
        type: Schema.Types.ObjectId,
        ref: "student",
      },
    ],

    placements: [
      {
        type: Schema.Types.ObjectId,
        ref: "placement",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const College = mongoose.model("college", collegeSchema);
module.exports = College;
