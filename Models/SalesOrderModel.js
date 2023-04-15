import { Schema } from "mongoose";
import mongoose from "mongoose";

const SalesOrderSchema = Schema({
  customerId: {
    type: Schema.Types.ObjectId,
    ref: "Customer",
  },
  salesOrderNumber: {
    type: String,
  },
  reference: {
    type: String,
  },
  salesOrderDate: {
    type: String,
  },
  expectedShipmentDate: {
    type: String,
  },
  paymentTerms: {
    type: String,
  },
  deliveryMethod: {
    type: String,
  },
  salesPersonId: {
    type: Schema.Types.ObjectId,
    ref: "SalesPerson",
  },
  salesOrderItems: {
    type: Array,
  },
  discount: {
    type: Number,
  },
  discountType: {
    type: String,
  },
  salesOrderSubtotal: {
    type: Number,
  },
  salesOrderTotal: {
    type: Number,
  },

  termAndConditions: {
    type: String,
  },
});

export default mongoose.model("SalesOrder", SalesOrderSchema);
