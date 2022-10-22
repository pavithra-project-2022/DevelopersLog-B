import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema(
  {
    projectId: { type: String },
    projectCode: { type: String },
    projectName: { type: String },
    projectType: { type: String },
    projectDevLocation: { type: String },
    projectTeamSize: { type: Number },
    projectDuration: { type: String },
    projectComDate: { type: String },
    projectClosedDate: { type: String },
    createdBy: { type: String },
    createDate: { type: String },
    modifyBy: { type: String, required: false },
    modifyDate: { type: String, required: false },
  },
  { timestamps: true }
);

export default mongoose.model("Project", ProjectSchema);
