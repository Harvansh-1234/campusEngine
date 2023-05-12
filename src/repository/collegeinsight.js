const Insight = require("../models/collegeInsightSchema");

const createCollegeInsight = async(data)=>{
    try {
        const insight = new Insight(data);
        await insight.save();
        return[null,insight];
    } catch (error) {
        let errObj = {
            status: 500,
            message: err.message || "Some error occurred while creating the Insight.",
          };
          return [errObj, null];
    }
}

const getJobInsight = async (id) => {
    try {
      
      let applications = await Insight.findById(id);
      // console.log(`here is the list of jobs i am ${applications}`);
      return [null, applications];
    } catch (err) {
      let errObj = {
        status: 500,
        message: err.message || "Some error occurred while getting the Job.",
      };
      return [errObj, null];
    }
  };

module.exports = {
    createCollegeInsight,
    getJobInsight,
}