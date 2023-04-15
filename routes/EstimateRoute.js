import { Router } from "express";
import {
  createEstimate,
  getEstimate,
  updateEstimate,
  deleteEstimate,
  getAllEstimates,
  generateEstimateNumber,
} from "../Controllers/EstimateController";

const route = Router();

route.post("/estimate", createEstimate);
route.get("/estimate/:id", getEstimate);
route.patch("/estimate/:id", updateEstimate);
route.delete("/estimate/:id", deleteEstimate);
route.get("/estimates", getAllEstimates);
route.get("/generateEstimateNumber", generateEstimateNumber);

export { route as estimateRoute };
