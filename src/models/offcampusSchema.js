// offcampus jobs schema

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const offcampusSchema = new mongoose.Schema(
  {
    Location: {
      type: String,
      required: true,
      trim: true,
    },
    Id: {
      type: String,
      required: true,
      trim: true,
    },
    Title: {
      type: String,
      required: true,
      trim: true,
    },
    Company: {
      type: String,
      required: true,
      trim: true,
    },

    CompanyLink: {
      type: String,
      required: true,
      trim: true,
    },
    CompanyImgLink: {
      type: String,
      required: true,
      trim: true,
    },
    Place: {
      type: String,
      required: true,
      trim: true,
    },
    Date: {
      type: String,
      required: true,
      trim: true,
    },
    Link: {
      type: String,
      required: true,
      trim: true,
    },
    applyLink: {
      type: String,
      required: true,
      trim: true,
    },
    insights: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

let offcampus = mongoose.model("offcampus", offcampusSchema);

module.exports = offcampus;
