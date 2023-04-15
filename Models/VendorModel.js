import mongoose from "mongoose";

const VendorSchema = mongoose.Schema(
  {
    userId: {
      type: String,
    },
    companyName: {
      type: String,
    },
    vendorDiplayName: {
      type: String,
    },
    currency: {
      type: String,
    },
    email: {
      type: String,
    },

    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    openingBalance: {
      type: Number,
    },
    pan: {
      type: String,
    },
    paymentTerm: {
      type: String,
    },
    phone: {
      type: String,
    },
    website: {
      type: String,
    },
    tax: {
      type: String,
    },
    shippingAddress: mongoose.Schema({
      attention: {
        type: String,
      },
      city: {
        type: String,
      },
      country: {
        type: String,
      },
      phone: {
        type: String,
      },
      pincode: {
        type: String,
      },
      state: {
        type: String,
      },
      street: {
        type: String,
      },
    }),
    billingAddress: mongoose.Schema({
      attention: {
        type: String,
      },
      city: {
        type: String,
      },
      country: {
        type: String,
      },
      phone: {
        type: String,
      },
      pincode: {
        type: String,
      },
      state: {
        type: String,
      },
      street: {
        type: String,
      },
    }),
    bankDetails: mongoose.Schema({
      beneficiaryName: { type: String },
      bankName: { type: String },
      accountNumber: { type: Number },
      IFSC: {
        type: String,
      },
    }),
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Vendor", VendorSchema);
