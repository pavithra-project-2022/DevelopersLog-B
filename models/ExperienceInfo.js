import mongoose from "mongoose";
const ExperienceInfoSchema = new mongoose.Schema(
  {
    empId: { type: String },
    companyName1:{type:String},
    period1:{type:String},
    position1:{type:String},
    jobDescription1:{type:String},
    companyName2:{type:String},
    period2:{type:String},
    position2:{type:String},
    jobDescription2:{type:String},
    companyName3:{type:String},
    period3:{type:String},
    position3:{type:String},
    jobDescription3:{type:String},
    createBy: { type: String},
    createDate: {type:String},
    modifyBy: { type: String, required: false },
    modifyDate: { type: String, required: false },
  },
  { timestamps: true }
);

export default mongoose.model("ExperienceInfo", ExperienceInfoSchema);
