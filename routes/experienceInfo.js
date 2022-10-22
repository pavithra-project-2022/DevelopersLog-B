import express from "express";
import {
  createExperienceInfo,
  deleteExperienceInfo,
  getExperienceInfo,
  getExperienceInfos,
  updateExperienceInfo,
} from "../controllers/experienceInfo.js";
import {verifyAdmin} from "../utils/verifyToken.js"
const router = express.Router();

//CREATE
router.post("/:id/:userId", createExperienceInfo);

//UPDATE
router.put("/:id", updateExperienceInfo);

//DELETE
router.delete("/:id", deleteExperienceInfo);
//GET

router.get("/:id", getExperienceInfo);
//GET ALL

router.get("/", getExperienceInfos);


export default router;