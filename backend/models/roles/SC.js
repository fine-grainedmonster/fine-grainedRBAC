const mongoose = require("mongoose")
const employee_rolesSchema23 = mongoose.Schema(
    {
      ROLES: { type: mongoose.Schema.Types.ObjectId, ref: "ROLES" },
      View: { type: Boolean, default: false, required: true },
      Edit: { type: Boolean, default: false, required: true },
      Delete: { type: Boolean, default: false, required: true },
      Add: { type: Boolean, default: false, required: true },
    },
    { timestamps: true }
  );
  
  module.exports = mongoose.model("SCe", employee_rolesSchema23);