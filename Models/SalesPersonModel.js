import mongoose from "mongoose";

const SalesPersonSchema = mongoose.Schema(
  {
    userId: {
      type: String,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enums: ["salesperson"],
      default: "salesperson",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("SalesPerson", SalesPersonSchema);
