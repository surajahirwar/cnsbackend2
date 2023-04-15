import { Router } from "express";
import {
  createVendor,
  deleteVendor,
  getAllVendor,
  getVendor,
  updateVendor,
} from "../Controllers/VendorController";

const route = Router();

route.post("/vendor", createVendor);
route.get("/vendors", getAllVendor);
route.get("/vendor/:id", getVendor);
route.patch("/vendor/:id", updateVendor);
route.delete("/vendor/:id", deleteVendor);

export { route as vendorRoute };
