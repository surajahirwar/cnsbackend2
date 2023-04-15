import { Router } from "express";
import {
  createSalesOrder,
  getSalesOrder,
  updateSalesOrder,
  deleteSalesOrder,
  getAllSalesOrders,
  generateSalesOrderNumber,
} from "../Controllers/SalesOrderController";

const route = Router();

route.post("/salesorder", createSalesOrder);
route.get("/salesorder/:id", getSalesOrder);
route.patch("/salesorder/:id", updateSalesOrder);
route.delete("/salesorder/:id", deleteSalesOrder);
route.get("/salesorders", getAllSalesOrders);
route.get("/generateSalesorderNumber", generateSalesOrderNumber);

export { route as salesOrderRoute };
