// create Job post

const { getJobByQueryRepo } = require("../repository/jobs.repo");
const { createOffCampusJobPostRepo } = require("../repository/quiz.repo");
const { serverErrorResponse } = require("../utils/response");

const createJobPost = async (req, res) => {
  try {
    // create job post
    let [err1, jobPost1] = await createOffCampusJobPostRepo(req.body);
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
    let [err1, jobPost1] = await getJobByQueryRepo({
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

module.exports = {
  createJobPost,
  getJobPost,
  listCompanyJobs,
};
