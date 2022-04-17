const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
      validate: {
        validator: function (value) {
          return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
        },
        message: `Enter a Valid Email`,
      },
      required: [true, "Email is required"],
    },
    username: {
      type: String,
      unique: [true, "User Name is Already Taken"],
      validate: {
        validator: function (value) {
          return /^[^\s]+(\s+[^\s]+)*$/.test(value);
        },
        message: `Enter a Valid User Name`,
      },
      required: [true, "User Name is required"],
    },
    password: {
      type: String,
      validate: {
        validator: function (value) {
          return /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])([a-zA-Z0-9@!*#$%]{8,})*$/.test(value);
        },
        message: `Enter a Valid Password`,
      },
      required: [true, "Password is required"],
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
    pic: {
      type: String,
      required: true,
      default:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
    access: { type: Boolean, required: true, default: true },
  },
  { timestamps: true }
);
const User = mongoose.model("User", userSchema);

module.exports = User;
