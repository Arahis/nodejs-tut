import express from "express";
import path from "path";
import { router as adminRouter } from "./routes/admin.js";
import { router as shopRouter } from "./routes/shop.js";

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(process.cwd(), "/public")));
app.use("/admin", adminRouter);
app.use(shopRouter);

app.use("/", (req, res) => {
  res.status(404).sendFile(path.join(process.cwd(), "./views/404.html"));
});

app.listen(3000);
