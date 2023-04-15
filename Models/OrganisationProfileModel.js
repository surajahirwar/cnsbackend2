import mongoose, { Schema } from "mongoose";

const OrganisationSchema = new Schema(
  {
    profileImg: {
      type: String,
      require: false,
    },
    name: {
      type: String,
      require: false,
    },
    industry: {
      type: String,
    },
    bussinesslocation: {
      type: String,
    },
    address: mongoose.Schema({
      street: String,
      city: String,
      state: String,
      pincode: String,
      phonenumber: Number,
      fax: String,
      website: String,
    }),
    fiscalYear: {
      type: String,
    },
    reportBasis: {
      type: String,
      enums: ["Cash", "Accural"],
    },
    timezone: {
      type: String,
    },
    dateFormat: {
      type: String,
    },
    language: {
      type: String,
    },
    company: {
      type: String,
    },
    taxId: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Organisation", OrganisationSchema);
