import express from "express";
import {
  createPersonalInfo,
  deletePersonalInfo,
  getPersonalInfo,
  getPersonalInfos,
  updatePersonalInfo,
} from "../controllers/personalInfo.js";
import {verifyAdmin} from "../utils/verifyToken.js"
const router = express.Router();

//CREATE
router.post("/:id/:userId", createPersonalInfo);

//UPDATE
router.put("/:id", updatePersonalInfo);

//DELETE
router.delete("/:id", deletePersonalInfo);
//GET

router.get("/:id", getPersonalInfo);
//GET ALL

router.get("/", getPersonalInfos);


export default router;