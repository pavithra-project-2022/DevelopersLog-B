import express from "express";

import {
    searchDcm
  } from "../controllers/search.js";
  
  const router = express.Router();

  //CREATE
router.post("/filtered", searchDcm);

export default router