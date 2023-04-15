import mongoose from "mongoose";

const CustomerSchema = mongoose.Schema(
  {
    userId: {
      type: String,
    },
    companyName: {
      type: String,
    },
    companyDiplayName: {
      type: String,
    },
    currency: {
      type: String,
    },
    email: {
      type: String,
    },
    customerType: {
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
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Customer", CustomerSchema);
