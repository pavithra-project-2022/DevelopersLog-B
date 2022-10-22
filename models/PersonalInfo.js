import mongoose from "mongoose";
const PersonallnfoSchema = new mongoose.Schema(
  {
    empId: { type: String },
    address: { type: String },
    dob: { type: String },

    createBy: { type: String},
    createDate: {type:String},
    modifyBy: { type: String, required: false },
    modifyDate: { type: String, required: false },
  },
  { timestamps: true }
);

export default mongoose.model("Personallnfo", PersonallnfoSchema);
