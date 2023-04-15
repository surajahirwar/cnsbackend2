import expressAsyncHandler from "express-async-handler";
import Vendor from "../Models/VendorModel";

export const createVendor = expressAsyncHandler(async (req, res, next) => {
  const vendor = await Vendor.create(req.body);
  res.status(201).json({
    success: true,
    vendor,
  });
});

export const getVendor = expressAsyncHandler(async (req, res, next) => {
  const vendor = await Vendor.findById(req.params.id);
  if (!vendor) {
    res.status(403).json({
      success: false,
      massege: "vendor not found",
    });
  }
  res.status(200).json({
    success: true,
    vendor,
  });
});

export const updateVendor = expressAsyncHandler(async (req, res, next) => {
  const vendor = await Vendor.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!vendor) {
    res.status(403).json({
      success: false,
      massege: "unble to update vendor ",
    });
  }
  res.status(200).json({
    success: true,
    vendor,
  });
});

export const deleteVendor = expressAsyncHandler(async (req, res, next) => {
  const vendor = await Vendor.findByIdAndDelete(req.params.id);
  console.log("vendor", vendor);
  res.status(200).json({
    success: true,
  });
});

export const getAllVendor = expressAsyncHandler(async (req, res, next) => {
  const vendors = await Vendor.find();
  res.status(200).json({
    success: true,
    vendors,
  });
});
