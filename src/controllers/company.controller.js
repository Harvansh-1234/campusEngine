// create Job post

const {
  getJobByQueryRepo,
  getJobInfo,
  getApplicationByQueryRepo,
} = require("../repository/jobs.repo");
const { createOffCampusJobPostRepo } = require("../repository/quiz.repo");
const { serverErrorResponse, successResponse } = require("../utils/response");
const { createJobPostRepo } = require("../repository/jobs.repo");
const { getUserById } = require("../repository/user.repo");

const createJobPost = async (req, res) => {
  try {
    // create job post
    let [err1, jobPost1] = await createJobPostRepo(req.body);
    if (err1) {
      console.log(`Error in create job post: ${err1.message}`);
      return serverErrorResponse(res, err1.message);
    }
    return successResponse(res, jobPost1, "Job post created");
  } catch (err) {
    console.log(err);
    return serverErrorResponse(res, err.message);
  }
};

// get job post
const getJobPost = async (req, res) => {
  try {
    // get job post
    let [err1, jobPost1] = await getJobInfo({
      _id: req.body.jobId,
    });
    if (err1) {
      console.log(`Error in get job post: ${err1.message}`);

      return serverErrorResponse(res, err1.message);
    }
    if (jobPost1.length === 0)
      return notFoundResponse(res, "Job post not found");

    return successResponse(res, jobPost1, "Job post fetched");
  } catch (err) {
    let errObj = {
      message: err.message,
      status: 500,
    };

    return serverErrorResponse(res, errObj);
  }
};

// list all jobs created by a company
const listCompanyJobs = async (req, res) => {
  try {
    // get job post
    let [err1, jobPost1] = await getJobByQueryRepo({
      jobId: req.userId,
    });
    if (err1) {
      console.log(`Error in get job post: ${err1.message}`);
      return serverErrorResponse(res, err1.message);
    }
    if (jobPost1.length === 0)
      return notFoundResponse(res, "Job post not found");
    return successResponse(res, jobPost1, "Job post fetched");
  } catch (err) {
    let errObj = {
      message: err.message,
      status: 500,
    };
    return serverErrorResponse(res, errObj);
  }
};

// get all applications for a job post
const listJobApplications = async (req, res) => {
  try {
    // get all applications for a job post
    let [err1, jobPost1] = await getApplicationByQueryRepo({
      jobId: req.body.jobId,
    });
    if (err1) {
      console.log(`Error in get job post: ${err1.message}`);
      return serverErrorResponse(res, err1.message);
    }
    let userArr = new Array();
    for (let i = 0; i < jobPost1.length; i++) {
      let [err2, user] = await getUserById(jobPost1[i].userId);
      if (err2) {
        console.log(`Error in get user by id: ${err2.message}`);
        return serverErrorResponse(res, err2.message);
      }
      userArr.push(user);
    }
    return successResponse(res, userArr, "Job post fetched");
  } catch (err) {
    return serverErrorResponse(res, err.message);
  }
};

module.exports = {
  createJobPost,
  getJobPost,
  listCompanyJobs,
  listJobApplications,
};
