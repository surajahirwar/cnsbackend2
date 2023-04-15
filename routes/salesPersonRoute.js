import { Router } from "express";
import {
  createSalesPerson,
  getSalesPerson,
  updateSalesPerson,
  deleteSalesPerson,
  getAllSalesPerson,
} from "../Controllers/SalesPersonController";

const route = Router();

route.post("/salesperson", createSalesPerson);
route.get("/salesperson/:id", getSalesPerson);
route.get("/salespersons", getAllSalesPerson);
route.patch("/salesperson/:id", updateSalesPerson);
route.delete("/salesperson/:id", deleteSalesPerson);

export { route as salesPersonRoute };
