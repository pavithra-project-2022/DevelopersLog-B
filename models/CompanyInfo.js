import mongoose from "mongoose";
const CompanyInfoSchema = new mongoose.Schema(
  {
    empId: { type: String },
    companyName: { type: String},
    branch: { type: String},
    position: { type: String},
    officeMailId: { type: String},
    website: { type: String},
    companyContactNo: { type: String},
    createBy: { type: String},
    createDate: {type:String},
    modifyBy: { type: String, required: false },
    modifyDate: { type: String, required: false },
  },
  { timestamps: true }
);

export default mongoose.model("CompanyInfo", CompanyInfoSchema);
