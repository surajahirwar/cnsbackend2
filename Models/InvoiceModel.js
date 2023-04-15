import mongoose, { Schema } from "mongoose";
const dayjs = require("dayjs");

const InvoiceSchema = new Schema(
  {
    userid: {
      type: String,
      require: false,
    },
    customerId: {
      type: Schema.Types.ObjectId,
      ref: "Customer",
    },
    salesPersonId: {
      type: Schema.Types.ObjectId,
      ref: "SalesPerson",
    },
    invoiceNumber: {
      type: String,
      required: true,
    },
    orderNumber: {
      type: Number,
    },
    invoiceDate: {
      type: String,
    },
    invoiceDueDate: {
      type: String,
    },
    invoiceItems: {
      type: Array,
    },
    invoiceTotal: {
      type: Number,
    },
    invoiceTotal: {
      type: Number,
    },
    discountType: {
      type: String,
    },
    discount: {
      type: Number,
    },
    taxType: {
      type: String,
    },
    taxAmount: {
      type: Number,
    },
    termsAndConditions: {
      type: String,
    },
    balanceDue: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

// InvoiceSchema.virtual("dueDays")
//   .get(function () {
//     // const date = new Date(datejs(this.invoiceDueDate));
//     const date = dayjs(this.invoiceDueDate);
//     const diff = date.diff(dayjs(), "day", true);
//     console.log(diff);
//     return diff;
//   })
//   .set(function (val) {
//     throw new Error("Cannot set dueDays directly.");
//   });

// InvoiceSchema.set("toObject", { virtuals: true });
// InvoiceSchema.set("toJSON", { virtuals: true });

export default mongoose.model("Invoice", InvoiceSchema);
