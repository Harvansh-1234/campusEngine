const User = require("../models/user");

const createUser = async (user) => {
  try {
    const newUser = await User.create(user);
    return [null, newUser];
  } catch (error) {
    let errObj = {
      code: 500,
      message: `Internal Server Error: ${error.message}`,
    };
    return [errObj, null];
  }
};

const getUserByEmail = async (email) => {
  try {
    const user = await User.find({ email });
    return [null, user];
  } catch (error) {
    let errObj = {
      code: 500,
      message: `Internal Server Error: ${error.message}`,
    };
    return [errObj, null];
  }
};

const getUserById = async (id) => {
  try {
    // find user by id
    let user = await User.find({ _id: id });
    return [null, user];
  } catch (error) {
    let errObj = {
      code: 500,
      message: `Internal Server Error: ${error.message}`,
    };
    return [errObj, null];
  }
};

const updateUserById = async (id, data) => {
  try {
    // find user by id
    let user = await User.findByIdAndUpdate(id, data, { new: true });
    return [null, user];
  } catch (error) {
    let errObj = {
      code: 500,
      message: `Internal Server Error: ${error.message}`,
    };
    return [errObj, null];
  }
};

// get user by query
const getUserByQuery = async (query) => {
  try {
    let companies = await User.find(query);
    return [null, companies];
  } catch (err) {
    let errObj = {
      code: 500,

      message: `Internal Server Error: ${err.message}`,
    };
    return [errObj, null];
  }
};

module.exports = {
  createUser,
  getUserByEmail,
  getUserById,
  updateUserById,
  getUserByQuery,
};
