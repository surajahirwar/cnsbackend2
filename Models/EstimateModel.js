import mongoose, { Schema } from "mongoose";

const EstimateSchema = new Schema(
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
    estimateNumber: {
      type: String,
    },
    reference: {
      type: String,
    },
    estimateDate: {
      type: String,
    },
    estimateItems: {
      type: Array,
    },
    estimateTotal: {
      type: Number,
    },
    estimateSubtotal: {
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
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Estimate", EstimateSchema);
