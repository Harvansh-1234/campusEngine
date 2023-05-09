import axios from 'axios';
export const url = "http://localhost:8000";
//auth

export const signIn = async (data) => {
    try {
        console.log(data);
        return await axios.post(`${url}/api/auth/signin`, data);
    } catch (error) {
        console.log(error)
    }
}
export const signup = async (data) => {
    try {
        console.log(data);
        return await axios.post(`${url}/api/auth/signup`, data);
    } catch (error) {
        console.log(error)
    }
}

//user
export const getAllQuiz = async (data) => {
    try {
        console.log(data);
        return await axios.get(`${url}/api/user/getAllQuiz`, {headers: {authorization:data}});
    } catch (error) {
console.log(error)
    }
}

export const getUserInfo = async (data) => {
    try {
        console.log(data);
        return await axios.get(`${url}/api/user/getUserInfo/${data}`);
    } catch (error) {
        console.log(error)
    }
}
export const getResume = async (data) => {
    try {
        console.log(data);
        return await axios.get(`${url}/api/user/getResume`, { headers: { authorization: data } });
    } catch (error) {
        console.log(error)
    }
}
export const updateResume = async (token, data) => {
    try {
        console.log(data);
        return await axios.post(`${url}/api/user/updateResume`, data, { headers: { authorization: token } });
    } catch (error) {
        console.log(error)
    }
}

export const Upload = async (data, email) => {
    try {
        console.log(data);
        return await axios.post(`${url}/uploadImage`, { email: email ,image: data });
    } catch (error) {
        console.log(error);
        console.log("Error while calling signup API: ", error);
    }
};

export const getAllEligibleJobs = async(token) => {
    try {
        // console.log(token);
        return await axios.get(`${url}/api/user/getAllEligibleJobs`, { headers: { authorization: token } });
    } catch (error) {
        console.log(error)
    }
}
// update user
export const updateUser = async (token, data) => {
    try {
        console.log(data);
        return await axios.post(`${url}/api/user/updateUserInfo`, data, { headers: { authorization: token } });
    } catch (error) {
        console.log(error)
    }
}

// Company Routes

// create job 
export const createJob = async (token, data) => {
    try {
        console.log(data);
        return await axios.post(`${url}/api/company/createJob`, data, { headers: { authorization: token } });



    } catch (error) {
        console.log(error)
    }
}
export const listCompanyJob = async (token) => {
    try {
        // console.log(data);
        return await axios.get(`${url}/api/company/listCompanyJob`, { headers: { authorization: token } });
    } catch (error) {
        console.log(error)
    }
}
export const getJobDetail = async (token, id) => {
    try {
        // console.log(data);
        return await axios.post(`${url}/api/company/getJobInfo`, { jobId: id }, { headers: { authorization: token } });
    } catch (error) {
        console.log(error)

    }
}

    export const getQuiz = async (token, data) => {
        try {
            console.log(data);
            return await axios.post(`${url}/api/user/getQuiz`, { title: data }, { headers: { authorization: token } });
        } catch (error) {
            console.log(error)
        }
    }
    export const getCompany = async (token, data) => {
        try {
            console.log(data);
            return await axios.get(`${url}/api/company/getCompany`,{ headers: { authorization: token } });
        } catch (error) {
            console.log(error)
        }
    }

    // TNP

    // get Students
    export const getStudents = async () => {
        try {
            // console.log(data);
            return await axios.get(`${url}/api/user/getstudents`);
        } catch (error) {
            console.log(error)
        }
    }

    export const applyJob = async (token,data) => {
        try {
            console.log(data);
            return await axios.post(`${url}/api/user/applyJob`,data,{ headers: { authorization: token } });
        } catch (error) {
            console.log(error)
        }
    }
    export const listJobApplicants = async (data) => {
        try {
            console.log(data);
            return await axios.post(`${url}/api/company/listJobApplicants`,data);
        } catch (error) {
            console.log(error)
        }
    }
    export const getAllOffCampusJobs = async (data) => {
        try {
            console.log(data);
            return await axios.get(`${url}/api/user/getAllOffCampusJobs`,{headers: { authorization: data }});
        } catch (error) {
            console.log(error)
        }
    }

    //get all jobs
    export const getAllJobs = async (token,data) => {
        try {
            console.log(data);
            return await axios.post(`${url}/api/company/getAllJobs`,data,{headers: { authorization: token }});
        } catch (error) {
            console.log(error)
        }
    }
    export const updateJob = async (token,data) => {
        try {
            console.log(data);
            return await axios.post(`${url}/api/company/updateJobStatus`,data,{headers: { authorization: token }});
        } catch (error) {
            console.log(error)
        }
    }


