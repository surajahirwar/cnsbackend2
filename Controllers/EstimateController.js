import expressAsyncHandler from "express-async-handler";
import Estimate from "../Models/EstimateModel";

export const createEstimate = expressAsyncHandler(async (req, res, next) => {
  const estimate = await Estimate.create(req.body);
  if (!estimate) {
    res.status(403).json({
      success: false,
      massege: "customer not found",
    });
  }
  res.status(201).json({
    success: true,
    estimate,
  });
});

export const getEstimate = expressAsyncHandler(async (req, res, next) => {
  const estimate = await Estimate.findById(req.params.id).populate([
    "customerId",
    "salesPersonId",
  ]);
  res.status(200).json({
    success: true,
    estimate,
  });
});

export const updateEstimate = expressAsyncHandler(async (req, res, next) => {
  console.log(req.body);
  const estimate = await Estimate.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!estimate) {
    res.status(403).json({
      success: false,
      massege: "unble to update customer ",
    });
  }
  res.status(200).json({
    success: true,
    estimate,
  });
});

export const deleteEstimate = expressAsyncHandler(async (req, res, next) => {
  await Estimate.findByIdAndDelete(req.params.id);
  res.status(200).json({
    success: true,
  });
});

export const getAllEstimates = expressAsyncHandler(async (req, res, next) => {
  const estimates = await Estimate.find().populate(
    "customerId",
    "companyDiplayName"
  );

  res.status(200).json({
    success: true,
    estimates,
  });
});

export const generateEstimateNumber = expressAsyncHandler(
  async (req, res, next) => {
    const estimate = await Estimate.find({})
      .sort({ estimateNumber: -1 })
      .limit(1)
      .lean();

    const number =
      estimate.length > 0 ? estimate[0].estimateNumber.split("-")[1] : "000";

    let numberAsInt = parseInt(number, 10);
    let incrementedNumberAsInt = numberAsInt + 1;
    let incrementedNumberAsString = incrementedNumberAsInt.toString();
    let paddedIncrementedNumber = incrementedNumberAsString.padStart(
      number.length,
      "0"
    );

    const estimateNumber = `EST-${paddedIncrementedNumber}`;

    res.status(201).json({ status: true, estimateNumber });
  }
);
