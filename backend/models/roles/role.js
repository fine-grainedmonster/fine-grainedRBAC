const mongoose = require("mongoose");

const roleSchema = mongoose.Schema(
  {
    id: {
      type: String,
      required: [true, "Please add an id"],
      unique: true,
    },
    assignedTo: {
      type: mongoose.Schema.Types.ObjectId, //convert to object id later mongoose.Schema.Types.ObjectId,
      
      default: "employee_id",
    },
    role_name: {
      type: String,
      required: [true, "Please add a role name"],
      default:"patient"
    },
    level: {
      type: String,
      required: [true, "Please add a level"],
    }
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("ROLE", roleSchema);
