import { Router } from "express";
import {
  createCustomer,
  deleteCustomer,
  getAllCustomer,
  getCustomer,
  updateCustomer,
} from "../Controllers/CustomerController";

const route = Router();

route.post("/customer", createCustomer);
route.get("/customers", getAllCustomer);
route.get("/customer/:id", getCustomer);
route.patch("/customer/:id", updateCustomer);
route.delete("/customer/:id", deleteCustomer);

export { route as customerRoute };
