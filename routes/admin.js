import express from "express";
import path from "path";

export const router = express.Router();

router.post("/new-product", (req, res) => {
  console.log(req.body);
  res.redirect("/");
});

router.get("/product", (req, res) => {
  res.sendFile(path.join(process.cwd(), "./views/add-product.html"));
});
