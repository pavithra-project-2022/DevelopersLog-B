import mongoose from "mongoose";

const ProjectLocationSchema = new mongoose.Schema(
  {
    projectLocationId: { type: String },
    projectLocation: { type: String },
    createdBy: { type: String },
    createDate: { type: String },
    modifyBy: { type: String},
    modifyDate: { type: String},
  },
  { timestamps: true }
);

export default mongoose.model("ProjectLocation", ProjectLocationSchema);
