import express from "express";
import {
  createProjectType,
  deleteProjectType ,
  getProjectType,
  getProjectTypes,
  updateProjectType,
} from "../controllers/projectType.js";
import {verifyAdmin} from "../utils/verifyToken.js"
const router = express.Router();

//CREATE
router.post("/", createProjectType);

//UPDATE
router.put("/:id", updateProjectType);

//DELETE
router.delete("/:id", deleteProjectType);
//GET

router.get("/:id", getProjectType);
//GET ALL

router.get("/", getProjectTypes);


export default router;