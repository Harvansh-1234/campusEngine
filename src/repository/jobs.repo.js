const Application = require("../models/applicationSchema");
const Job = require("../models/jobSchema");

const createJobPostRepo = async (data) => {
  try {
    const job = new Job(data);
    const result = await job.save();
    return [null, result];
  } catch (err) {
    let errObj = {
      status: 500,
      message: err.message || "Some error occurred while creating the Job.",
    };
    return [errObj, null];
  }
};

// get job post by query
const getJobByQueryRepo = async (query) => {
  try {
    let applications = await Application.find(query);
    let appArr = new Array();
    applications.forEach((app) => {
        appArr.push(app.jobId);
    });
    let job = await Job.find({ _id: { $nin: appArr } });

    return [null, job];
  } catch (err) {
    let errObj = {
      status: 500,
      message: err.message || "Some error occurred while getting the Job.",
    };
    return [errObj, null];
  }
};

module.exports = {
  createJobPostRepo,
  getJobByQueryRepo,
};
