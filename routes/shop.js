import express from "express";
import path from "path";

export const router = express.Router();

router.get("/", (req, res, next) => {
  res.sendFile(path.join(process.cwd(), "./views/shop.html"));
});
