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

export const getUserInfo = async (data) => {
    try {
        console.log(data);
        return await axios.get(`${url}/api/user/getUserInfo`, {headers: {authorization:data}});
    } catch (error) {
console.log(error)
    }
}