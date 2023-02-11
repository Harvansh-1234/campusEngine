// resume schema
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var resumeSchema = new mongoose.Schema(
  {
    studentId: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
      unique: true,
    },
    name: {
      first: String,
      last: String,
    },
    contact: {
      email: String,
      phone: String,
    },
    links: [
      {
        name: String,
        link: String,
      },
    ],
    branch: {
      type: String,
    },
    year: {
      type: String,
    },
    admission_year: {
      type: String,
    },
    degree: {
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
    work_experience: [
      {
        company: String,
        position: String,
        startDate: String,
        endDate: String,
        description: String,
      },
    ],
    education: [
      {
        school: String,
        degree: String,
        fieldOfStudy: String,
        startDate: String,
        endDate: String,
        grade: String,
      },
    ],
    projects: [
      {
        name: String,
        description: String,
        link: String,
        startDate: Date,
        endDate: Date,
      },
    ],
  },
  {
    timestamps: true,
  }
);

var Resume = mongoose.model("resume", resumeSchema);
module.exports = Resume;
