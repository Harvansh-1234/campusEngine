// resume schema
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var resumeSchema = new mongoose.Schema(
  {
    studentId: {
      type: Schema.Types.ObjectId,
      ref: "student",
      required: true,
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
    skills: [String],
    work_experience: [
      {
        company: String,
        position: String,
        start_date: Date,
        end_date: Date,
        description: String,
      },
    ],
    education: [
      {
        school: String,
        degree: String,
        field_of_study: String,
        start_date: Date,
        end_date: Date,
        grade: String,
      },
    ],
    projects: [
      {
        name: String,
        description: String,
        link: String,
        start_date: Date,
        end_date: Date,
      },
    ],
  },
  {
    timestamps: true,
  }
);

var Resume = mongoose.model("resume", resumeSchema);
module.exports = Resume;
