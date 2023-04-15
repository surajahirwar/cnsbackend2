import express from "express";
import cors from "cors";
const app = express();
import mongoose from "mongoose";
import { customerRoute } from "./routes/customerRoute";
import { estimateRoute } from "./routes/EstimateRoute";
import { salesPersonRoute } from "./routes/salesPersonRoute";
import morgan from "morgan";
import { invoiceRoute } from "./routes/invoiceRoute";
import { salesOrderRoute } from "./routes/SalesOrderRoute";
import { vendorRoute } from "./routes/vendorRoute";
import { organisationProfileRoute } from "./routes/OrganisationProfileRoute";
import path from "path";
require("dotenv").config();

app.use(morgan("short"));

app.use(express.json());
app.use(cors());
app.use("/uploads", (req, res, next) => {
  // Get the file extension from the request URL
  const fileExtension = req.url.split(".").pop();

  // Set 'Content-Disposition' header to 'inline' for image file types
  if (["jpg", "jpeg", "png", "gif"].includes(fileExtension.toLowerCase())) {
    res.set("Content-Disposition", "inline");
  }

  // Call the next middleware
  next();
});
app.use("/uploads", express.static("uploads"));

app.use("/api", customerRoute);
app.use("/api", estimateRoute);
app.use("/api", invoiceRoute);
app.use("/api", salesPersonRoute);
app.use("/api", salesOrderRoute);
app.use("/api", vendorRoute);
app.use("/api", organisationProfileRoute);

var __dirname = path.resolve();
console.log(__dirname);
app.use(express.static(path.join(__dirname, "/build")));
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "/build/index.html"))
);

async function main() {
  await mongoose.connect(
    "mongodb+srv://cstej:cstej1107@cluster0.7bvjf.mongodb.net/crmdb"
  );
  console.log("Db connected");
  app.listen(process.env.PORT, () => {
    console.log(`Server running on port 5000`, process.env.PORT);
  });
}
main();
