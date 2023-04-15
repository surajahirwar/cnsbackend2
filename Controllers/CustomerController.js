import expressAsyncHandler from "express-async-handler";
import Customer from "../Models/CustomerModel";

export const createCustomer = expressAsyncHandler(async (req, res, next) => {
  const customer = await Customer.create(req.body);
  res.status(201).json({
    success: true,
    customer,
  });
});

export const getCustomer = expressAsyncHandler(async (req, res, next) => {
  const customer = await Customer.findById(req.params.id);
  if (!customer) {
    res.status(403).json({
      success: false,
      massege: "customer not found",
    });
  }
  res.status(200).json({
    success: true,
    customer,
  });
});

export const updateCustomer = expressAsyncHandler(async (req, res, next) => {
  const customer = await Customer.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!customer) {
    res.status(403).json({
      success: false,
      massege: "unble to update customer ",
    });
  }
  res.status(200).json({
    success: true,
    customer,
  });
});

export const deleteCustomer = expressAsyncHandler(async (req, res, next) => {
  const customer = await Customer.findByIdAndDelete(req.params.id);
  console.log("customer", customer);
  res.status(200).json({
    success: true,
  });
});

export const getAllCustomer = expressAsyncHandler(async (req, res, next) => {
  const customers = await Customer.find();
  res.status(200).json({
    success: true,
    customers,
  });
});
