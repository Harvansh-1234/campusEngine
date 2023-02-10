const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clg_nameSchema = new mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
        trim: true,
      },
    });

const clg_name = mongoose.model("clg_name", clg_nameSchema);
module.exports = clg_name;


