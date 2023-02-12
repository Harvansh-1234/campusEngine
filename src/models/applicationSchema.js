// application schema
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var applicationSchema = new mongoose.Schema(
  {
    studentId: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    jobId: {
      type: Schema.Types.ObjectId,
      ref: "job",
      required: true,
    },
    applicationStatus: {
      type: String,
      enum: [
        "pending",
        "tnpapproved",
        "tnprejected",
        "companyapproved",
        "companyrejected",
        "applied",
        "selected",
      ],
      required: true,
      trim: true,
    },
    applicationDate: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

var Application = mongoose.model("application", applicationSchema);
module.exports = Application;
