const express = require("express");
const router = express.Router();
const {
  registerPatient,
  loginPatient,
  loginSTAFF,
} = require("../controller/patient/patient");
const {
  studentdiagnosis,
  diagnosisData,

  patientdiagnosis,
} = require("../controller/doctor/patientDiagnosis");
const {
  ClinicalReport,
  MicroBiology,
} = require("../controller/labattendant/Studentlabreport");

const { protect } = require("../middleware/authmiddleware");
const { prescribtions } = require("../controller/doctor/patientPrescribtion");
const {registerROLE, updateRole}= require("../controller/role")

router.route("/register").post(registerPatient);
router.route("/login").get(loginPatient);

router.route("/login").post(loginSTAFF);

// router.post("/login",protect, loginStudent);
// // router.get("/me", protect, getStudent);
// router.get("/me", protect, loginStudent);

// router.delete('/:id',  protect, deleteRecord)
// router.put('/:id',protect, updateRecord)
router.route("/diagnosis").post(patientdiagnosis);
// router.post('/prescribtions',protect, prescribtion)
router.route("/data").get(diagnosisData);

router.route("/prescribtion").post(prescribtions)
router.route("/update").post(updateRole)
router.route("/registerroles").post(registerROLE)
// router.route("/ClinicalReport").post(protect,ClinicalReport)
// router.route("/MicroBiology").post(protect,MicroBiology)

module.exports = router;
