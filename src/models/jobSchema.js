// create job Schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jobSchema = new mongoose.Schema(
  {
    jobCreator: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    jobTitle: {
      type: String,
      required: true,
      trim: true,
    },
    jobDescription: {
      type: String,
      required: true,
      trim: true,
    },
    jobLocation: {
      type: String,
      required: true,
      trim: true,
    },
    jobType: {
      type: String,
      required: true,
      trim: true,
    },
    jobSalary: {
      type: Number,
      required: true,
      trim: true,
    },
    jobSkillsArray: {
      type: Array,
      required: true,
      trim: true,
    },
    branchEligible: [{ type: String }],
    batchEligible: [{ type: String }],
    jobExperience: {
      type: String,
      required: true,
      trim: true,
    },
    jobVacancies: {
      type: Number,
      required: true,
      trim: true,
    },
    jobDeadline: {
      type: Date,
      required: true,
      trim: true,
    },
    jobPostedOn: {
      type: Date,
      required: true,
      trim: true,
    },
    jobStatus: {
      type: String,
      enum: ["open", "closed"],
      required: true,
      trim: true,
    },
    studentsShortListed: [
      {
        type: Schema.Types.ObjectId,
        ref: "student",
      },
    ],
    approvalStatus: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Job = mongoose.model("job", jobSchema);
module.exports = Job;
