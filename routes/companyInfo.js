import express from "express";
import {
  createCompanyInfo,
  deleteCompanyInfo,
  getCompanyInfo,
  getCompanyInfos,
  updateCompanyInfo,
} from "../controllers/companyInfo.js";
import {verifyAdmin} from "../utils/verifyToken.js"
const router = express.Router();

//CREATE
router.post("/:id/:userId", createCompanyInfo);

//UPDATE
router.put("/:id", updateCompanyInfo);

//DELETE
router.delete("/:id", deleteCompanyInfo);
//GET

router.get("/:id", getCompanyInfo);
//GET ALL

router.get("/", getCompanyInfos);


export default router;