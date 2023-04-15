import { Router } from "express";
import {
  createInvoice,
  getInvoice,
  updateInvoice,
  deleteInvoice,
  getAllInvoice,
  generateInvoice,
  generateInvoiceNumber,
} from "../Controllers/InvoiceController";

const route = Router();

route.post("/invoice", createInvoice);
route.get("/invoice/:id", getInvoice);
route.patch("/invoice/:id", updateInvoice);
route.delete("/invoice/:id", deleteInvoice);
route.get("/invoices/", getAllInvoice);
route.get("/generateinvoice", generateInvoice);
route.get("/generateInvoiceNumber", generateInvoiceNumber);

export { route as invoiceRoute };
