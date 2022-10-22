import express from "express";
import {
  createDcm,
  deleteDcm,
  getDcm,
  getDcms,
  updateDcm,
  getDcmDetailsSingleUser,
  
} from "../controllers/dcm.js";

const router = express.Router();
//CREATE
router.post("/:userId", createDcm);
//SEARCH
// router.post("/search", searchDcm);
//UPDATE
router.put("/:id", updateDcm);
//DELETE
router.delete("/:id", deleteDcm);
//GET

router.get("/:id", getDcm);
//GET ALL

router.get("/", getDcms);

router.get("/dcmUser/:id", getDcmDetailsSingleUser);

export default router;