const { getJobByQueryRepo } = require("../repository/jobs.repo");
const { serverErrorResponse, successResponse } = require("../utils/response");

// get all jobs
const getAllJobs = async (req, res) => {
  try {
    let query = {
      approvalStatus: req.body.approvalStatus,
    };
    let [err, jobs] = await getJobByQueryRepo(query);
    return successResponse(res, jobs, "Success!");
  } catch (err) {
    console.log(`Error in get all jobs: ${err.message}`);
    return serverErrorResponse(res, err.message);
  }
};

const updateJobPost = async (req, res) => {
  try {
    let [err, jobPost] = await getJobByQueryRepo(
      {
        _id: req.body.jobId,
      },
      { approvalStatus: req.body.approvalStatus }
    );
    if (err) {
      console.log(`Error in get job post: ${err.message}`);
      return serverErrorResponse(res, err.message);
    }
    if (jobPost.length === 0)
      return notFoundResponse(res, "Job post not found");
  } catch (err) {
    console.log(`Error in get job post: ${err.message}`);
    return serverErrorResponse(res, err.message);
  }
};

module.exports = {
  getAllJobs,
  updateJobPost,
};
