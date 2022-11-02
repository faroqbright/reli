import mongoose from "mongoose";

/*********** users model ************/
const { Schema } = mongoose;
const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: false,
      lowercase: true,
      unique: false
    },
    password: {
      type: String,
      default: null
      },
    name: {
      type: String,
      required: false,
    },
    firstName: {
      type: String,
      required: false,
    },
    lastName: {
      type: String,
      required: false,
    },
    userType: {
      type: String,
      required: true,
    },
    userImage: {
      type: String,
      default: null,
    },
    phoneNumber: {
      type: Number,
      default: null,
    },
    otp: {
      type: String,
      default: "1234",
    },
    statusBit: {
      type: Boolean,
      default: true,
    },
    delBit: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      default: null,
    },
    updatedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      default: null,
    }
  },
  { timestamps: true }
);
export default mongoose.model("users", UserSchema);
