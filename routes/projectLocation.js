import express from "express";
import {
  createProjectLocation,
  deleteProjectLocation ,
  getProjectLocation,
  getProjectLocations,
  updateProjectLocation,
} from "../controllers/projectLocation.js";
import {verifyAdmin} from "../utils/verifyToken.js"
const router = express.Router();

//CREATE
router.post("/", createProjectLocation);

//UPDATE
router.put("/:id", updateProjectLocation);

//DELETE
router.delete("/:id", deleteProjectLocation);
//GET

router.get("/:id", getProjectLocation);
//GET ALL

router.get("/", getProjectLocations);


export default router;