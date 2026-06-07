import mongoose from "mongoose";

const leadSchema = new mongoose.Schema(
  {
    name: {
      type:String,
      require: true
    },

    email: {
      type: String,
      require: true,
      lowercase: true
    },

    phoneNumber: {
      type: String,
      require: true
    },

    companyName: {
      type:String,
      require:true
    },

    leadStatus: {
      type: String,
      require: true,
      enum: ["new", "contacted", "qualified", "converted", "lost"],
      default: "new",
    },

    notes: String,
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Lead", leadSchema);
