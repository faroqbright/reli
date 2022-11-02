import mongoose from "mongoose";
/*********** ConfigEmil model ************/
const { Schema } = mongoose;
const configEmailSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
   delBit: {
    type: Boolean,
    default: false
  }
  },
  { timestamps: true }
);
export default mongoose.model("configEmail", configEmailSchema);
