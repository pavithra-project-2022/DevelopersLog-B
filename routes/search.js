import express from "express";
const router = express.Router();
import {
    searchDcm
  } from "../controllers/search.js";

  //CREATE
router.post("/filtered", searchDcm);

export default router