import mongoose from "mongoose";

const ProjectTypeSchema = new mongoose.Schema(
  {
    projectTypeId: { type: String },
    projectType: { type: String },
    createdBy: { type: String },
    createDate: { type: String },
    modifyBy: { type: String, required: false },
    modifyDate: { type: String, required: false },
  },
  { timestamps: true }
);

export default mongoose.model("ProjectType", ProjectTypeSchema);
