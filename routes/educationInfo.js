import express from "express";
import {
  createEducationInfo,
  deleteEducationInfo,
  getEducationInfo,
  getEducationInfos,
  updateEducationInfo,
} from "../controllers/educationInfo.js";
import {verifyAdmin} from "../utils/verifyToken.js"
const router = express.Router();

//CREATE
router.post("/:id/:userId", createEducationInfo);

//UPDATE
router.put("/:id", updateEducationInfo);

//DELETE
router.delete("/:id", deleteEducationInfo);
//GET

router.get("/:id", getEducationInfo);
//GET ALL

router.get("/", getEducationInfos);


export default router;