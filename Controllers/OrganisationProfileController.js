import Organisation from "../Models/OrganisationProfileModel";
const fs = require("fs");

import expressAsyncHandler from "express-async-handler";

export const createOrganisation = expressAsyncHandler(async (req, res) => {
  const organisation = await Organisation.create(req.body);
  if (!organisation) {
    res.status(403).json({
      success: false,
      massege: "Not able to create organisation",
    });
  }
  res.status(201).json({
    success: true,
    organisation,
  });
});

export const getOrganisation = expressAsyncHandler(async (req, res) => {
  const organisation = await Organisation.findById(req.params.id).populate(
    "address"
  );
  if (!organisation) {
    res.status(403).json({
      success: false,
      massege: "organisation  not found",
    });
  }
  res.status(201).json({
    success: true,
    organisation,
  });
});

export const updateOrganisation = expressAsyncHandler(async (req, res) => {
  const url = req.protocol + "://" + req.get("host");

  console.log(req.file);
  const organisation = await Organisation.findByIdAndUpdate(req.params.id, {
    ...req.body,
    profileImg: url + "/uploads/" + req.file.filename,
  });

  if (!organisation) {
    res.status(403).json({
      success: false,
      massege: "Not able to update organisation",
    });
  }
  res.status(201).json({
    success: true,
    organisation,
  });
});

export const getOrganisationProfileImg = expressAsyncHandler(
  async (req, res) => {
    console.log(req.params.id);
    const { profileImg } = await Organisation.findById(
      req.params.id,
      "profileImg"
    ).lean();

    res.status(200).json({ success: true, profileImg });
  }
);

export const deleteOrganisationProfileImg = expressAsyncHandler(
  async (req, res) => {
    const { profileImg } = await Organisation.findByIdAndUpdate(req.params.id, {
      profileImg: null,
    });

    // fs.unlinkSync(profileImg);

    res.status(201).json({ success: true, profileImg });
  }
);
