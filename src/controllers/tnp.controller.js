const {
  getJobByQueryRepo,
  updateJobPostRepo,
  getJobInfo,
} = require("../repository/jobs.repo");
const { serverErrorResponse, successResponse } = require("../utils/response");

// get all jobs
const getAllJobs = async (req, res) => {
  try {
    let query = {
      applicationStatus: req.body.approvalStatus,
    };
    let [err, jobs] = await getJobByQueryRepo(query);
    if(err){
      return serverErrorResponse(res, err.message);
    }
    let toReturn  = [];
    for(let i = 0; i < jobs.length; i++){
        let [err0, jobDetails] = await getJobInfo({_id: jobs[i].jobId});
        if(err0){
          return serverErrorResponse(res, err0.message);
        }

        toReturn.push({
          ...jobs[i]._doc,
          ...jobDetails[0]._doc
        })

    }
  
    return successResponse(res, toReturn, "Success!");
  } catch (err) {
    console.log(`Error in get all jobs: ${err.message}`);
    return serverErrorResponse(res, err.message);
  }
};

const updateJobPost = async (req, res) => {
  try {
    let [err, jobPost] = await updateJobPostRepo(
      {
        _id: req.body.jobId,
      },
      { approvalStatus: req.body.approvalStatus }
    );
    if (err) {
      console.log(`Error in get job post: ${err.message}`);
      return serverErrorResponse(res, err.message);
    }
    return successResponse(res, jobPost, "Job post updated");
  } catch (err) {
    console.log(`Error in get job post: ${err.message}`);
    return serverErrorResponse(res, err.message);
  }
};

const getJobsByQuery = async (req, res) => {
  try {
    let query = {
      approvalStatus: req.body.approvalStatus,
    };
    let [err, jobs] = await getJobInfo(query);
    if(err){
      return serverErrorResponse(res, err.message);
    }
   
    return successResponse(res, jobs, "Success!");
  } catch (err) {
    console.log(`Error in get all jobs: ${err.message}`);
    return serverErrorResponse(res, err.message);
  }
};

module.exports = {
  getAllJobs,
  updateJobPost,
  getJobsByQuery
};
