import expressAsyncHandler from "express-async-handler";
import Invoice from "../Models/InvoiceModel";
import dayjs from "dayjs";
import puppeteer from "puppeteer";
const Handlebars = require("handlebars");

const fs = require("fs");

export const createInvoice = expressAsyncHandler(async (req, res, next) => {
  const invoice = await Invoice.create(req.body);
  if (!invoice) {
    res.status(403).json({
      success: false,
      massege: "customer not found",
    });
  }
  res.status(201).json({
    success: true,
    invoice,
  });
});

export const getInvoice = expressAsyncHandler(async (req, res, next) => {
  const invoice = await Invoice.findById(req.params.id);
  res.status(200).json({
    success: true,
    invoice,
  });
});

export const updateInvoice = expressAsyncHandler(async (req, res, next) => {
  const invoice = await Invoice.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!invoice) {
    res.status(403).json({
      success: false,
      massege: "unble to update Invoice ",
    });
  }
  res.status(200).json({
    success: true,
    invoice,
  });
});

export const deleteInvoice = expressAsyncHandler(async (req, res, next) => {
  await Invoice.findByIdAndDelete(req.params.id);
  res.status(200).json({
    success: true,
  });
});

export const getAllInvoice = expressAsyncHandler(async (req, res, next) => {
  const invoices = await Invoice.find().populate(
    "customerId",
    "companyDiplayName"
  );

  res.status(200).json({
    success: true,
    invoices,
  });
});

export const generateInvoice = expressAsyncHandler(async (req, res) => {
  const _id = "6433ee951edcb336da49f6f2";
  const invoice = await Invoice.find({ _id }).populate("customerId");
  console.log(invoice);

  const invoiceData = {
    organisation: {
      name: "Booom Guys",
      address: {
        city: "Aligarh",
      },
    },
    invoice: invoice[0],
  };

  // Handlebars.registerHelper("@index", function (options) {
  //   return options.data.index;
  // });
  const invoiceTemplate = Handlebars.compile(
    fs.readFileSync(`${__dirname}/../template/index.html`, "utf8")
  );

  let invoiceHtml = invoiceTemplate(invoiceData);
  // Create a browser instance
  const browser = await puppeteer.launch({
    headless: true,
  });

  // Create a new page
  const page = await browser.newPage();

  // set your html as the pages content
  // const html = fs.readFileSync(`${__dirname}/../template/index.html`, "utf8");
  await page.setContent(invoiceHtml);

  // create a pdf buffer
  const pdfBuffer = await page.pdf({
    format: "A4",
    printBackground: true,
  });

  // or a .pdf file
  await page.pdf({
    format: "A4",
    path: `${__dirname}/my-fance-invoice.pdf`,
  });

  // close the browser
  await browser.close();

  res.status(201).json({ success: true });
});

export const generateInvoiceNumber = expressAsyncHandler(
  async (req, res, next) => {
    const invoice = await Invoice.find({})
      .sort({ invoiceNumber: -1 })
      .limit(1)
      .lean();

    const number =
      invoice.length > 0 ? invoice[0].invoiceNumber.split("-")[1] : "000";

    let numberAsInt = parseInt(number, 10);
    let incrementedNumberAsInt = numberAsInt + 1;
    let incrementedNumberAsString = incrementedNumberAsInt.toString();
    let paddedIncrementedNumber = incrementedNumberAsString.padStart(
      number.length,
      "0"
    );

    const invoiceNumber = `INV-${paddedIncrementedNumber}`;

    res.status(201).json({ status: true, invoiceNumber });
  }
);
