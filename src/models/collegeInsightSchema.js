const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const collegeInsightSchema = new mongoose.Schema(
    {
        collegeLogo:{
            type: String,
            
        },
        ourCourses:[
            {
                courseName:{
                    type:String,
                    required:true,
                    trim:true
                },
                  courseImgUrl:{
                    type:String,
                    
                },
                instructorName:{
                    type:String,
                    required:true,
                    trim:true
                },
            }
        ],
        recentlyAdded:[
            {
                courseName:{
                    type:String,
                    required:true,
                    trim:true
                },
                courseImgUrl:{
                    type:String,
                },
                instructorName:{
                    type:String,
                    required:true,
                    trim:true
                }
            }
        ],
        topStudents:[
            {
                studentName:{
                    type:String,
                    required:true,
                    trim:true,
                },
                studentCgpa:{
                    type:Number,
                    required:true,
                    minLength:1,
                    maxLength:5,
                },
                studentRating:{
                    type:Number,
                }
            }
        ],
        recruiters:[
            {
                companyLogo:{
                    type:String,
                },
                companyName:{
                    type:String,
                    required:true,
                    trim:true,
                },
                interviewerName:{
                    type:String,
                    required:true,
                    trim:true,
                }
            }
        ]
    }
);

const Insights = mongoose.model("insights",collegeInsightSchema);
module.exports = Insights;