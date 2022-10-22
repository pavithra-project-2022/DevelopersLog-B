import express from "express";
import {
  createProject,
  deleteProject,
  getProject,
  getProjects,
  updateProject,
} from "../controllers/project.js";
import {verifyAdmin} from "../utils/verifyToken.js"
const router = express.Router();

//CREATE
router.post("/", createProject);

//UPDATE
router.put("/:id", updateProject);

//DELETE
router.delete("/:id", deleteProject);
//GET

router.get("/:id", getProject);
//GET ALL

router.get("/", getProjects);


export default router;