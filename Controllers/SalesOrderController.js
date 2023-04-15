import expressAsyncHandler from "express-async-handler";
import SalesOrder from "../Models/SalesOrderModel";

export const createSalesOrder = expressAsyncHandler(async (req, res, next) => {
  const salesOrder = await SalesOrder.create(req.body);
  res.status(201).json({
    success: true,
    salesOrder,
  });
});

export const getSalesOrder = expressAsyncHandler(async (req, res, next) => {
  const salesOrder = await SalesOrder.findById(req.params.id);
  if (!salesOrder) {
    res.status(403).json({
      success: false,
      massege: "sales order not found",
    });
  }
  res.status(200).json({
    success: true,
    salesOrder,
  });
});

export const updateSalesOrder = expressAsyncHandler(async (req, res, next) => {
  const salesOrder = await SalesOrder.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  if (!salesOrder) {
    res.status(403).json({
      success: false,
      massege: "unble to update sales order ",
    });
  }
  res.status(200).json({
    success: true,
    salesOrder,
  });
});

export const deleteSalesOrder = expressAsyncHandler(async (req, res, next) => {
  await SalesOrder.findByIdAndDelete(req.params.id);
  res.status(200).json({
    success: true,
  });
});

export const getAllSalesOrders = expressAsyncHandler(async (req, res, next) => {
  const salesOrders = await SalesOrder.find().populate(
    "customerId",
    "companyDiplayName"
  );
  if (!salesOrders) {
    res.status(403).json({
      success: false,
      massege: "sales order not found",
    });
  }

  res.status(200).json({
    success: true,
    salesOrders,
  });
});

export const generateSalesOrderNumber = expressAsyncHandler(
  async (req, res, next) => {
    const salesOrder = await SalesOrder.find({})
      .sort({ salesOrderNumber: -1 })
      .limit(1)
      .lean();

    const number =
      salesOrder.length > 0
        ? salesOrder[0].salesOrderNumber.split("-")[1]
        : "000";

    let numberAsInt = parseInt(number, 10);
    let incrementedNumberAsInt = numberAsInt + 1;
    let incrementedNumberAsString = incrementedNumberAsInt.toString();
    let paddedIncrementedNumber = incrementedNumberAsString.padStart(
      number.length,
      "0"
    );

    const salesOrderNumber = `SO-${paddedIncrementedNumber}`;

    res.status(201).json({ status: true, salesOrderNumber });
  }
);
