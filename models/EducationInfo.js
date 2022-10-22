import mongoose from "mongoose";
const EducationInfoSchema = new mongoose.Schema(
  {
    empId: { type: String },
    sslcSchoolName:{type:String},
    sslcBoard:{type:String},
    sslcGPA:{type:String},
    hscSchoolName:{type:String},
    hscBoard:{type:String},
    hscGPA:{type:String},
    diplomaCollegeName:{type:String},
    diplomaDegree:{type:String},
    diplomaGPA:{type:String},
    ugCollegeName:{type:String},
    ugDegree:{type:String},
    ugBoard:{type:String},
    ugGPA:{type:String},
    pgCollegeName:{type:String},
    pgDegree:{type:String},
    pgBoard:{type:String},
    pgGPA:{type:String},
    createBy: { type: String},
    createDate: {type:String},
    modifyBy: { type: String, required: false },
    modifyDate: { type: String, required: false },
  },
  { timestamps: true }
);

export default mongoose.model("EducationInfo", EducationInfoSchema);
