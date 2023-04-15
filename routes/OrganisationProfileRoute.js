import { Router } from "express";
import {
  createOrganisation,
  updateOrganisation,
  getOrganisation,
  deleteOrganisationProfileImg,
  getOrganisationProfileImg,
} from "../Controllers/OrganisationProfileController";

import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});
const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
    }
  },
});

const route = Router();
route.get("/organisationprofile/:id", getOrganisation);
route.post("/organisationprofile", createOrganisation);
route.patch(
  "/organisationprofile/:id",
  upload.single("file"),
  updateOrganisation
);
route.delete("/organisationProfileImg/:id", deleteOrganisationProfileImg);
route.get("/organisationProfileImg/:id", getOrganisationProfileImg);

export { route as organisationProfileRoute };
