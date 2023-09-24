const asyncHandler = require("express-async-handler");
const ROLE = require("../models/roles/role");
const DAh = require("../models/roles/DAh");
const CDe = require("../models/roles/CDe");
const Be = require("../models/roles/BE");
const TSe = require("../models/roles/TSe");
const TRe = require("../models/roles/TRe");
const EAe = require("../models/roles/EAe");
const EDe = require("../models/roles/ED");
const Ce = require("../models/roles/Ce");
const PMe = require("../models/roles/PMe");
const ERe = require("../models/roles/ERe");
const ESe = require("../models/roles/ESe");
const EPe = require("../models/roles/EPe");
const SHe = require("../models/roles/SH");
const Pe = require("../models/roles/P");
const Se = require("../models/roles/S");
const MIee = require("../models/roles/MI");
const PSee = require("../models/roles/PS");
const GBFe = require("../models/roles/GBF");
const GBHe = require("../models/roles/GBH");
const GBSIe = require("../models/roles/GBSI");
const PRe = require("../models/roles/PR");
const PIe = require("../models/roles/PI");
const RRe = require("../models/roles/RR");
const SAe = require("../models/roles/SA");
const TDe = require("../models/roles/TD");
const TGe = require("../models/roles/TG");
const SVe = require("../models/roles/SV");
const SCGe = require("../models/roles/SCG");
const LVe = require("../models/roles/LV");
const De = require("../models/roles/D");
const DGe = require("../models/roles/DG");
const CMe = require("../models/roles/CM");
const CMGe = require("../models/roles/CMG");
const TBe = require("../models/roles/TB");
const SPe = require("../models/roles/SP");
const SEe = require("../models/roles/SE");
const RCSe = require("../models/roles/RCS");
const RCCe = require("../models/roles/RCC");
const MICe = require("../models/roles/MIC");
const OTe = require("../models/roles/OT");
const FSe = require("../models/roles/FS");
const SCe = require("../models/roles/SC");
const CSe = require("../models/roles/CS");
const RTHe = require("../models/roles/RTH");
const RTe = require("../models/roles/RT");
const ROe = require("../models/roles/RO");
const GBRHe = require("../models/roles/GBRH")

const PATIENT = require("../models/patient");
const employeelogger = require("../utils/stafflogs");
const menulogger = require("../utils/logger");
const rolelogger = require("../utils/logger");
// const BRANCH = require("../model/branch");

// const stored_value = require("../model/roles/sale_properties/stored_value");
// const { json } = require("body-parser");

//@desc get  all products related to a shop
//route shops/product/getall
//access public
const getallproductoffered = asyncHandler(async (req, res) => {
  const { id } = req.auth;
  const getall = await PRODUCT.find();
  res.status(202).json({ getall });
});
const getallrolescreated = asyncHandler(async (req, res) => {
  const data = await ROLE.find().select("id role_name level");
  console.log(data);
  res.status(202).json({ data });
});


const getallrolescreate = asyncHandler(async (req, res) => {
  const data = await ROLE.find().select("");
  data.forEach((role) => {
    console.log("ID:", role.id);
    console.log("Role Name:", role.role_name);
    console.log("Level:", role.level);
    console.log("PMSC Modules:", role.pmscmodules);
    console.log("Created At:", role.createdAt);
    console.log("Updated At:", role.updatedAt);
    console.log("-------------------");
  });
  res.status(202).json({ data });
});
//@desc register product
//route products/register/
const registerROLE = asyncHandler(async (req, res) => {
  const emp = req.auth;
  // console.log(req.body);
  const { id, role, level,employee_id } = req.body;
  // const branch = await EMPLOYEE.findById(req.body.branch_id)
  //   if (
  //     emp.role === "superAdmin" ||
  //     (emp.role === "manger" && emp.property_id === req.body.branch_id)
  //   ) {
  const rolem = await ROLE.findOne({ id: id });

  if (rolem) {
    res.status(401);
    throw new Error("role already exist");
  }

  // Assuming you have data for the role and subdocuments

  // Create the role document
  const createROLE = await ROLE.create({
    id: id,
    role_name: role,
    level: level,
    assignedTo: employee_id ,
  });
  // const branch = await BRANCH.findById(req.body.branch_id);
  //data type
  
  if (createROLE) {
    
    const updatePatient = await PATIENT.findByIdAndUpdate(employee_id,{role:employee_id})
  res.status(202).json({message:"sucsess",
data:createROLE})
  
    rolelogger.info(
      `roles with role_code :${id} and name ${role} was created :${req.session.id}:250 - ${res.statusMessage}  - ${req.originalUrl} - ${req.method} - ${req.ip}-`
    );

    // if (branch._id === createMenu.ref_branch) {

    // }
    // else {
    //     res.status(200).json({
    //       Message: `${menuName} created `,
    //       menudetails: createMenu,
    //       setup_location: branch.branch_name,
    //       data_type: "inherited",
    //     });
    //     employeelogger.info(
    //       `employee with id :${emp._id} created a product ${menuName}  :${req.session.id}:250 - ${res.statusMessage}  - ${req.originalUrl} - ${req.method} - ${req.ip}-`
    //     );
    //     menulogger.info(
    //       `menu with menu_code :${code} and name ${menuName} was created :${req.session.id}:250 - ${res.statusMessage}  - ${req.originalUrl} - ${req.method} - ${req.ip}-`
    //     );
    //     branchlogger.info(
    //       `menu with menu_code :${code} and name ${menuName} was created at branch with branch_id:${branc._id}  :${req.session.id}:250 - ${res.statusMessage}  - ${req.originalUrl} - ${req.method} - ${req.ip}-`
    //     );
    //   }
  } else {
    throw new Error("role not created");
  }
  //   }
});
// desc update roles
// acess provate
//routes role/update

const updateRole = asyncHandler(async (req, res) => {
  const {
    id,
    TSView,
    TSEdit,
    TSDelete,
    TSAdd,
    TRView,
    TREdit,
    TRDelete,
    TRAdd,
    EAView,
    EAEdit,
    EADelete,
    EAAdd,
    EDView,
    EDEdit,
    EDDelete,
    EDAdd,
    CView,
    CEdit,
    CDelete,
    CAdd,
    PMView,
    PMEdit,
    PMDelete,
    PMAdd,
    ERView,
    EREdit,
    ERDelete,
    ERAdd,
    ESView,
    ESEdit,
    ESDelete,
    ESAdd,
    EPView,
    EPEdit,
    EPDelete,
    EPAdd,
    SHAdd,
    SHDelete,
    SHEdit,
    SHView,
    DAView,
    DAEdit,
    DADelete,
    DAAdd,
    GBFDelete,
    GBFView,
    GBFEdit,
    GBFAdd,
    GBHAdd,
    GBHDelete,
    GBHEdit,
    GBHView,
    GBSIAdd,
    GBSIDelete,
    GBSIView,
    GBSIEdit,
    GRHView,
    GRHEdit,
    GRHDelete,
    GRHAdd,
    PRView,
    PREdit,
    PRDelete,
    PRAdd,
    PIView,
    PIEdit,
    PIDelete,
    PIAdd,
    RRView,
    RREdit,
    RRDelete,
    RRAdd,
    SAView,
    SAEdit,
    SADelete,
    SAAAdd,
    SAAdd,
    SAAEdit,
    SAAView,
    SAADelete,
    ODView,
    ODEdit,
    ODDelete,
    ODAdd,
    PView,
    PEdit,
    PDelete,
    PAdd,
    WDAdd,
    WDEdit,
    WDDelete,
    WDView,
    APMAdd,
    APMDelete,
    APMEdit,
    APMView,
    TAdd,
    TEdit,
    TDelete,
    TView,
    TGAdd,
    TGEdit,
    TGView,
    TGDelete,
    SVAdd,
    SVEdit,
    SVDelete,
    SVView,
    SCGAdd,
    SCGEdit,
    SCGDelete,
    SCGView,
    SEView,
    SEDelete,
    SEAdd,
    SEEdit,
    LView,
    LVEdit,
    LVDelete,
    LVAdd,
    DView,
    DEdit,
    DDelete,
    DAdd,
    DGAdd,
    DGEdit,
    DGDelete,
    DGView,
    CMAdd,
    CMEdit,
    CMDelete,
    CMView,
    CMGAdd,
    CMGDelete,
    CMGView,
    CMGEdit,
    TBView,
    TBAdd,
    TBDelete,
    TBEdit,
    SAdd,
    SDelete,SView,
    SPAdd,
    SPView,
    SPEdit,
    SPDelete,
    SEdit,
  RTH,
    RCSAdd,
    RCSDelete,
    RCSEdit,
    RCSView,
    RCCAdd,
    RCCEdit,
    RCCDelete,
    RCCView,
    MICAdd,
    MICEdit,
    MICDelete,
    MICView,
    OTAdd,
    OTEdit,
    OTDelete,
    OTView,
    FSAdd,
    FSDelete,
    FSEdit,
    FSView,
    SCView,
    SCEdit,
    SCDelete,
    SCAdd,
    CSAdd,
    CSDelete,
    CSEdit,
    CSView,
    RTHAdd,
    RTHEdit,
    RTHDelete,
    RTHView,
    RTView,
    RTDelete,
    RTAdd,
    RTEdit,
    ROView,
    ROAdd,
    RODelete,
    ROEdit,
    PSAdd,
    PSDelete,
    PSEdit,
    PSView,
    MIView,
    MIAdd,
    MIDelete,
    MIEdit,
    MISPAdd,
    MISPDelete,
    MISPEdit,
    MISPView,
    MISView,
    MISEdit,
    MISAdd,
    MISDelete,
    MIRDAdd,
    MIRDDelete,
    MIRDView,
    MIRDEdit,
    MIGView,
    MIGAdd,
    MIGDelete,
    MIGEdit,
    PSDAdd,
    PSDDelete,
    PSDView,
    PSDEdit,
    MIAAdd,
    MIAView,
    MIAEdit,
    MIADelete,
    CDView,
    CDEdit,
    CDDelete,
    CDAdd,
    BView,
    BAdd,
    BEdit,
    BDelete,
    MIPAdd,
    MIPDelete,
    MIPEdit,
    MIPView,
  } = req.body;

  // Find the role document
  const User = await ROLE.findOne({ id: id });
if(!User){
  throw new Error("user not found")

}
  const roleId = User._id;

  // Create the pmscmodules document with the role reference


  // Create the subdocuments with the pmscmodules reference
  const DADATA = {
    ROLES: User._id,
    // other taxSets data...
    View:DAView,
    Edit: DAEdit,
    Delete: DADelete,
    Add: DAAdd,
  };
  const CDDATA = {
    ROLES: User._id,
    // other currency data...
    View: CDView,
    Edit: CDEdit,
    Delete: CDelete,
    Add: CDAdd,
  };
  const BDATA = {
    ROLES: User._id,
    // other eventArea data...
    View: BView,
    Edit: BEdit,
    Delete: BDelete,
    Add: BAdd,
  };
  const TSDATA = {
    ROLES: User._id,
    // other taxRate data...
    View: TSView,
    Edit: TSEdit,
    Delete: TSDelete,
    Add: TSAdd,
  };
  const TRDATA = {
    ROLES: User._id,
    // other eventDefinition data...
    View: TRView,
    Edit: TREdit,
    Delete: TRDelete,
    Add: TRAdd,
  };
  const EADATA = {
    ROLES: User._id,
    // other event role data...
    //ER=> employee role
    View: EAView,
    Edit: EAEdit,
    Delete: EADelete,
    Add: EAAdd,
  };
  const EDDATA = {
    ROLES: User._id,
    // other eventDefinition data...
    View: EDView,
    Edit: EDEdit,
    Delete: EDDelete,
    Add: EDAdd,
  };
  const CDATA = {
    ROLES: User._id,
    // other eventDefinition data...
    //EP => employee
    View: CView,
    Edit: CEdit,
    Delete: CDelete,
    Add: CAdd,
  };
  const PMDATA = {
    ROLES: User._id,
    // other eventDefinition data...
    //SH => SHIFT
    View: PMView,
    Edit: PMEdit,
    Delete: PMDelete,
    Add: PMAdd,
  };
  const ERDATA = {
    ROLES: User._id,
    // other eventDefinition data...
    //DA=> discount_analyzer
    View: ERView,
    Edit: EREdit,
    Delete: ERDelete,
    Add: ERAdd,
  };
  const ESDATA = {
    ROLES: User._id,
    // other eventDefinition data...
    //GBF=> discount_analyzer
    View: ESView,
    Edit: ESEdit,
    Delete: ESDelete,
    Add: ESAdd,
  };
  const EPDATA = {
    ROLES: User._id,
    // other eventDefinition data...
    //DA=> discount_analyzer
    View: EPView,
    Edit: EPEdit,
    Delete: EPDelete,
    Add: EPAdd,
  };
  const SHDATA = {
    ROLES: User._id,
    // other eventDefinition data...
    //DA=> discount_analyzer
    View: SHView,
    Edit: SHEdit,
    Delete: SHDelete,
    Add: SHAdd,
  };
  const PDATA = {
    ROLES: User._id,
    // other eventDefinition data...
    //DA=> discount_analyzer
    View: PView,
    Edit: PEdit,
    Delete: PDelete,
    Add: PAdd,
  };
  const SDATA = {
    ROLES: User._id,
    // other eventDefinition data...
    //DA=> discount_analyzer
    View: SView,
    Edit: SEdit,
    Delete: SDelete,
    Add: SAdd,
  };
  const MIDATA = {
    ROLES: User._id,
    // other eventDefinition data...
    //DA=> discount_analyzer
    View: MIView,
    Edit: MIEdit,
    Delete: MIDelete,
    Add: MIAdd,
  };
  const PSDATA = {
    ROLES: User._id,
    // other eventDefinition data...
    //DA=> discount_analyzer
    View: PSView,
    Edit: PSEdit,
    Delete: PSDelete,
    Add: PSAdd,
  };
  const GBFDATA = {
    ROLES: User._id,
    // other eventDefinition data...
    //DA=> discount_analyzer
    View: GBFView,
    Edit: GBFEdit,
    Delete: GBFDelete,
    Add: GBFAdd,
  };
  const GBHDATA = {
    ROLES: User._id,
    // other eventDefinition data...
    //DA=> discount_analyzer
    View: GBHView,
    Edit: GBHEdit,
    Delete: GBHDelete,
    Add: GBHAdd,
  };
  const GBSIDATA = {
    ROLES: User._id,
    // other eventDefinition data...
    //DA=> discount_analyzer
    View:GBSIView,
    Edit: GBSIEdit,
    Delete: GBSIDelete,
    Add: GBSIAdd,
  };
  const PRDATA = {
    ROLES: User._id,
    // other eventDefinition data...
    //DA=> discount_analyzer
    View: PRView,
    Edit: PREdit,
    Delete: PRDelete,
    Add: PRAdd,
  };
  const PIDATA = {
    ROLES: User._id,
    // other eventDefinition data...
    //DA=> discount_analyzer
    View: PIView,
    Edit: PIEdit,
    Delete: PIDelete,
    Add: PIAdd,
  };
  const RRDATA = {
    ROLES: User._id,
    // other eventDefinition data...
    //DA=> discount_analyzer
    View: RRView,
    Edit: RREdit,
    Delete: RRDelete,
    Add: RRAdd,
  };
  const SADATA = {
    ROLES: User._id,
    // other eventDefinition data...
    //DA=> discount_analyzer
    View: SAView,
    Edit: SAEdit,
    Delete: SADelete,
    Add: SAAdd,
};
  const TDATA = {
    ROLES: User._id,
    // other eventDefinition data...
    //DA=> discount_analyzer
    View: TView,
    Edit: TEdit,
    Delete: TDelete,
    Add: TAdd,
  };
  const TGDATA = {
    ROLES: User._id,
    // other eventDefinition data...
    //DA=> discount_analyzer
    View: TGView,
    Edit: TGEdit,
    Delete: TGDelete,
    Add: TGAdd,
  };
  const SVDATA = {
    ROLES: User._id,
    // other eventDefinition data...
    //DA=> discount_analyzer
    View: SVView,
    Edit: SVEdit,
    Delete: SVDelete,
    Add: SVAdd,
  };
  const SCGDATA = {
    ROLES: User._id,
    // other eventDefinition data...
    //DA=> discount_analyzer
    View: SCGView,
    Edit: SCGEdit,
    Delete: SCGDelete,
    Add: SCGAdd,
  };
  const LVDATA = {
    ROLES: User._id,
    // other eventDefinition data...
    //DA=> discount_analyzer
    View: LView,
    Edit: LVEdit,
    Delete: LVDelete,
    Add: LVAdd,
  };
  const DDATA = {
    ROLES: User._id,
    // other eventDefinition data...
    //DA=> discount_analyzer
    View: DView,
    Edit: DEdit,
    Delete: DDelete,
    Add: DAdd,
  };
  const DGDATA = {
    ROLES: User._id,
    // other eventDefinition data...
    //DA=> discount_analyzer
    View: DGView,
    Edit: DGEdit,
    Delete: DGDelete,
    Add: DGAdd,
  };
  const CMDATA = {
    ROLES: User._id,
    // other eventDefinition data...
    //DA=> discount_analyzer
    View: CMView,
    Edit: CMEdit,
    Delete: CMDelete,
    Add: CMAdd,
  };
  const CMGDATA = {
    ROLES: User._id,
    // other eventDefinition data...
    //DA=> discount_analyzer
    View: CMGView,
    Edit: CMGEdit,
    Delete: CMGDelete,
    Add: CMGAdd,
  };
  const TBDATA = {
    ROLES: User._id,
    // other eventDefinition data...
    //DA=> discount_analyzer
    View: TBView,
    Edit: TBEdit,
    Delete: TBDelete,
    Add: TBAdd,
  };
  const SPDATA = {
    ROLES: User._id,
    // other eventDefinition data...
    //DA=> discount_analyzer
    View: SPView,
    Edit: SPEdit,
    Delete: SPDelete,
    Add: SPAdd,
  };
  const SEDATA = {
    ROLES: User._id,
    // other eventDefinition data...
    //DA=> discount_analyzer
    View: SEView,
    Edit: SEEdit,
    Delete: SEDelete,
    Add: SEAdd,
  };
  const RCSDATA = {
    ROLES: User._id,
    // other eventDefinition data...
    //DA=> discount_analyzer
    View: RCSView,
    Edit: RCSEdit,
    Delete: RCSDelete,
    Add: RCSAdd,
  };
  const RCCDATA = {
    ROLES: User._id,
    // other eventDefinition data...
    //DA=> discount_analyzer
    View: RCCView,
    Edit: RCCEdit,
    Delete: RCCDelete,
    Add: RCCAdd,
  };
  const MICDATA = {
    ROLES: User._id,
    // other eventDefinition data...
    //DA=> discount_analyzer
    View: MICView,
    Edit: MICEdit,
    Delete: MICDelete,
    Add: MICAdd,
  };
  const OTDATA = {
    ROLES: User._id,
    // other eventDefinition data...
    //DA=> discount_analyzer
    View: OTView,
    Edit: OTEdit,
    Delete: OTDelete,
    Add: OTAdd,
  };
  const FSDATA = {
    ROLES: User._id,
    // other eventDefinition data...
    //DA=> discount_analyzer
    View: FSView,
    Edit: FSEdit,
    Delete: FSDelete,
    Add: FSAdd,
  };
  const SCDATA = {
    ROLES: User._id,
    // other eventDefinition data...
    //DA=> discount_analyzer
    View: SCView,
    Edit: SCEdit,
    Delete: SCDelete,
    Add: SCAdd,
  };
  const CSDATA = {
    ROLES: User._id,
    // other eventDefinition data...
    //DA=> discount_analyzer
    View: CSView,
    Edit: CSEdit,
    Delete: CSDelete,
    Add: CSAdd,
  };
  const RTHDATA = {
    ROLES: User._id,
    // other eventDefinition data...
    //DA=> discount_analyzer
    View: RTHView,
    Edit: RTHEdit,
    Delete: RTHDelete,
    Add: RTHAdd,
  };
  const RTDATA = {
    ROLES: User._id,
    // other eventDefinition data...
    //DA=> discount_analyzer
    View: RTView,
    Edit: RTEdit,
    Delete: RTDelete,
    Add: RTAdd,
  };
  const RODATA = {
    ROLES: User._id,
    // other eventDefinition data...
    //DA=> discount_analyzer
    View: ROView,
    Edit: ROEdit,
    Delete: RODelete,
    Add: ROAdd,
  };
  const GBRHDATA = {
    ROLES: User._id,
    // other eventDefinition data...
    //DA=> discount_analyzer
    View: ROView,
    Edit: ROEdit,
    Delete: RODelete,
    Add: ROAdd,
  };
  
  const DA1 = await DAh.create(DADATA);
  const CD1 = await CDe.create(CDDATA);
  const B1 = await Be.create(BDATA);
  const TS1 = await TSe.create(TSDATA);
  const TR1 = await TRe.create(TRDATA);
  //start here
  const EA1 = await EAe.create(EADATA);
  const C1 = await Ce.create(CDATA);
  const ED1 = await EDe.create(EDDATA);
  const ER1 = await ERe.create(ERDATA);
  const ES1 = await ESe.create(ESDATA);
  const EP1 = await EPe.create(EPDATA);
  const SH1 = await SHe.create(
    SHDATA
  );
  const P1 = await Pe.create(PDATA);
  const S1 = await Se.create(SDATA);
  const MI1 = await MIee.create(MIDATA);
  const PS1 = await PSee.create(PSDATA);
  const GBF1 = await GBFe.create(GBFDATA);
  const GBH1 = await GBHe.create(GBHDATA);
  const PR1 = await PRe.create(PRDATA);
  const GBSI1 = await GBSIe.create(GBSIDATA);
  const PI1 = await PIe.create(PIDATA);
  const RR1 = await RRe.create(RRDATA);
  const SA1 = await SAe.create(SADATA);
  const TD1 = await TDe.create(TDATA);
  const TG1 = await TGe.create(TGDATA);
  const SV1 = await SVe.create(SVDATA);
  // const CNG1 = await CNG.create(CNGDATA);
  const CMG1 = await CMGe.create(CMGDATA);
  const LV1 = await LVe.create(LVDATA);
  const SCG1 = await SCGe.create(SCGDATA);
  const D1 = await De.create(
    DDATA
  );
  const DG1 = await DGe.create(DGDATA);
  const CM1 = await CMe.create(CMDATA);
  const TB1 = await TBe.create(TBDATA);
  const SP1 = await SPe.create(SPDATA);
  const SE1 = await SEe.create(SEDATA);
  const RCS1 = await RCSe.create(RCSDATA);

  const RCC1 = await RCCe.create(RCCDATA);
  const MIC1 = await MICe.create(MICDATA);
  const OT1 = await OTe.create(OTDATA);
  const FS1 = await FSe.create(FSDATA);
  const SC1 = await SCe.create(SCDATA);
  const RTH1 = await RTHe.create(RTHDATA);
  const CS1 = await CSe.create(
    CSDATA
  );
  const RT1 = await RTe.create(RTDATA);
  const RO1 = await ROe.create(RODATA);
  const PM1 = await PMe.create(PMDATA);
  const GBRH1 = await GBRHe.create(GBRHDATA);


 
  // Construct the response object
  const response = {
    success: true,
    message: "Documents retrieved successfully",
    data: {
      role: {  DA1,

      CD1,
      B1,
      TS1,
      TR1,
      EA1,
      ED1,
      C1,
      PM1,
      ER1,
      ES1,
      EP1,
      SH1,
      P1,
      S1,
      MI1,
      PS1,
      GBF1,
      GBH1,
      GBRH1,
      GBSI1,
      PR1,
      PI1,
      RR1,
      SA1,
      TD1,
      TG1,
      SV1,
      SCG1,
      LV1,
      D1,
      DG1,
      CM1,
      CMG1,
      TB1,
      SP1,
      SE1,
      RCS1,
      RCC1,
      MIC1,
      OT1,
      FS1,
      SC1,
      CS1,
      RTH1,
      RT1,
      RO1,}
    },
  };

  res.status(200).json(response);
});
//desc pay for product
//@access private
//routes product/pay
const payForproduct = asyncHandler(async (req, res) => {});
module.exports = {
  registerROLE,
  getallrolescreated,
  getallrolescreate,
  updateRole,
};
