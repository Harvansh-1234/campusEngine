const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const collegeInsightSchema = new mongoose.Schema(
    {
        collegeLogo:{
            type: String,
            
        },
        ourCourses:{
            type:Array,
            default:[]
        },
        recentlyAdded:{
            type:Array,
            default:[]
        },
        topStudents:{
            type:Array,
            default:[]
        },
        recruiters:{
            type:Array,
            default:[]
        }
    }
);

const Insights = mongoose.model("insights",collegeInsightSchema);
module.exports = Insights;