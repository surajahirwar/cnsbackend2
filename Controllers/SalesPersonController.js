import expressAsyncHandler from "express-async-handler";
import SalesPerson from "../Models/SalesPersonModel";

export const createSalesPerson = expressAsyncHandler(async (req, res, next) => {
  const salesPerson = await SalesPerson.create(req.body);
  res.status(201).json({
    success: true,
    salesPerson,
  });
});

export const getSalesPerson = expressAsyncHandler(async (req, res, next) => {
  const salesPerson = await SalesPerson.findById(req.params.id);
  res.status(200).json({
    success: true,
    salesPerson,
  });
});

export const updateSalesPerson = expressAsyncHandler(async (req, res, next) => {
  const salesPerson = await SalesPerson.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json({
    success: true,
    salesPerson,
  });
});

export const deleteSalesPerson = expressAsyncHandler(async (req, res, next) => {
  await SalesPerson.findByIdAndDelete(req.params.id);
  res.status(200).json({
    success: true,
  });
});

export const getAllSalesPerson = expressAsyncHandler(async (req, res, next) => {
  const salesPersons = await SalesPerson.find();
  res.status(200).json({
    success: true,
    salesPersons,
  });
});
