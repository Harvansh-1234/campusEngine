const { getUserById, updateUserById } = require("../repository/user.repo");
const {
  createResumeRepo,
  getResumeByQueryRepo,
  updateResumeByQueryRepo,
} = require("../repository/resume.repo");
const {
  serverErrorResponse,
  notFoundResponse,
  successResponse,
} = require("../utils/response");
const {
  getQuizByQueryRepo,
  createQuizRepo,
} = require("../repository/quiz.repo");
const User = require("../models/user");
const {
  getJobByQueryRepo,
  createApplicationRepo,
  getAllOffCampusJobs,
} = require("../repository/jobs.repo");

const userInfo = async (req, res) => {
  try {
    console.log(req.userId);
    let [err, user] = await getUserById(req.userId);
    console.log(user);
    if (err) {
      console.log(`Error in get user by id: ${err.message}`);
      return serverErrorResponse(res, err.message);
    }
    if (user.length === 0) {
      return notFoundResponse(res, "User not found");
    }
    return successResponse(res, user[0], "User info");
  } catch (err) {
    logFunction("error", err);
    handle304(err.message, res);
    serverErrorResponse(res, "Internal Server Error");
  }
};
const getstudents = async (req, res) => {
  try {
    User.find({ userType: "user" }, (err, users) => {
      if (err) {
        console.log(`Error in get user by id: ${err.message}`);
        return serverErrorResponse(res, err.message);
      }
      if (users.length === 0) {
        return notFoundResponse(res, "User not found");
      }
      return successResponse(res, users, "User info");
    });
  } catch (err) {
    logFunction("error", err);
    handle304(err.message, res);
    serverErrorResponse(res, "Internal Server Error");
  }
};

// update userInfo controller
const updateUserInfo = async (req, res) => {
  try {
    let [err, user] = await getUserById(req.userId);
    if (err) {
      console.log(`Error in get user by id: ${err.message}`);
      return serverErrorResponse(res, err.message);
    }
    if (user.length === 0) {
      return notFoundResponse(res, "User not found");
    }
    let [err1, user1] = await updateUserById(req.userId, req.body);
    if (err1) {
      console.log(`Error in update user by id: ${err1.message}`);
      return serverErrorResponse(res, err1.message);
    }
    return successResponse(res, user1[0], "User info updated");
  } catch (err) {
    console.log("error", err);
    handle304(err.message, res);
    serverErrorResponse(res, "Internal Server Error");
  }
};

const createResume = async (req, res) => {
  try {
    // create resume
    let [err1, resume1] = await createResumeRepo(req.body);
    if (err1) {
      console.log(`Error in create resume: ${err1.message}`);
      return serverErrorResponse(res, err1.message);
    }
    return successResponse(res, resume1, "Resume created");
  } catch (err) {
    console.log(err);
    return serverErrorResponse(res, err.message);
  }
};

const createQuiz = async (req, res) => {
  try {
    // create quiz
    let [err1, quiz1] = await createQuizRepo(req.body);
    if (err1) {
      console.log(`Error in create quiz: ${err1.message}`);
      return serverErrorResponse(res, err1.message);
    }

    return successResponse(res, quiz1, "Quiz created");
  } catch (err) {
    let errObj = {
      message: err.message,
      status: 500,
    };
    return serverErrorResponse(res, errObj);
  }
};
// get quiz
const getQuiz = async (req, res) => {
  try {
    // get quiz
    let [err1, quiz1] = await getQuizByQueryRepo({ quizName: req.body.title });
    if (err1) {
      console.log(`Error in get quiz: ${err1.message}`);
      return serverErrorResponse(res, err1.message);
    }
    if (quiz1.length === 0) return notFoundResponse(res, "Quiz not found");

    return successResponse(res, quiz1, "Quiz fetched");
  } catch (err) {
    let errObj = {
      message: err.message,
      status: 500,
    };
    return serverErrorResponse(res, errObj);
  }
};

const updateResumeByStudentId = async (req, res) => {
  try {
    console.log(req.body);
    // update resume
    let [err1, resume1] = await updateResumeByQueryRepo(
      { studentId: req.userId },
      req.body
    );
    if (err1) {
      console.log(`Error in update resume: ${err1.message}`);
      return serverErrorResponse(res, err1.message);
    }
    return successResponse(res, resume1, "Resume updated");
  } catch (err) {
    console.log(err);
    return serverErrorResponse(res, err.message);
  }
};

const getResume = async (req, res) => {
  try {
    // get resume
    let [err1, resume1] = await getResumeByQueryRepo({ studentId: req.userId });
    if (err1) {
      console.log(`Error in get resume: ${err1.message}`);
      return serverErrorResponse(res, err1.message);
    }
    return successResponse(res, resume1, "Resume fetched");
  } catch (err) {
    console.log(err);
    return serverErrorResponse(res, err.message);
  }
};

const getAppliedJobs = async (req, res) => {
  try {
    let [err, jobs] = await getJobByQueryRepo({ studentId: req.userId });
    if (err) {
      console.log(`Error in get jobs: ${err.message}`);
      return serverErrorResponse(res, err.message);
    }
    return successResponse(res, jobs, "Jobs fetched");
  } catch (err) {
    console.log(err);
    return serverErrorResponse(res, err.message);
  }
};

const getAllQuiz = async (req, res) => {
  try {
    let [err, quiz] = await getQuizByQueryRepo({});
    if (err) {
      console.log(`Error in get quiz: ${err.message}`);
      return serverErrorResponse(res, err.message);
    }
    return successResponse(res, quiz, "Quiz fetched");
  } catch (err) {
    console.log(err);
    return serverErrorResponse(res, err.message);
  }
};

const getAllEligibleJobs = async (req, res) => {
  try {
    let [err1, user] = await getUserById(req.userId);
    if (err1) {
      console.log(`Error in get user by id: ${err1.message}`);
      return serverErrorResponse(res, err1.message);
    }
    if (user.length === 0) return notFoundResponse(res, "User not found");
    let batch = [user[0].year];
    let branch = [user[0].branch];
    let query = {
      batchEligible: { $in: batch },
      branchEligible: { $in: branch },
      approvalStatus: "approved",
    };
    console.log(query);
    let [err, jobs] = await getJobByQueryRepo(query);
    console.log(jobs);
    if (err) {
      console.log(`Error in get jobs: ${err.message}`);
      return serverErrorResponse(res, err.message);
    }
    return successResponse(res, jobs, "Jobs fetched");
  } catch (err) {
    console.log(err);
    return serverErrorResponse(res, err.message);
  }
};

const applyJob = async (req, res) => {
  try {
    let [err, application] = await createApplicationRepo(req.body);
    if (err) {
      console.log(`Error in apply job: ${err.message}`);
      return serverErrorResponse(res, err.message);
    }
    return successResponse(res, application, "Job applied");
  } catch (err) {
    console.log(err);
    return serverErrorResponse(res, err.message);
  }
};

const OffCampusJobPost = async (req, res) => {
  try {
    let [err, job] = await getAllOffCampusJobs({});
    if (err) {
      console.log(`Error in create job: ${err.message}`);
      return serverErrorResponse(res, err.message);
    }
    return successResponse(res, job, "Job created");
  } catch (err) {
    console.log(err);
    return serverErrorResponse(res, err.message);
  }
};

const filterSkills = async (req, res) => {
  try {
    const { skills } = req.body;
    console.log(skills);
    let users = await User.find({ "skills.name": { $in: skills } });
    return successResponse(res, users, "Users fetched");
  } catch (err) {
    console.log(err);
    return serverErrorResponse(res, err.message);
  }
};
module.exports = {
  userInfo,
  updateUserInfo,
  createResume,
  createQuiz,
  getQuiz,
  updateResumeByStudentId,
  getResume,
  getAppliedJobs,
  getAllQuiz,
  getAllEligibleJobs,
  getstudents,
  applyJob,
  OffCampusJobPost,
  filterSkills,
};
