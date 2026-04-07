const User = require("../models/User");
const OTP = require("../models/OTP");
const otpGenerator = require("otp-generator");
const bcrypt = require("bcryptjs");
const Profile = require("../models/Profile");
const jwt = require("jsonwebtoken");
const mailSender = require("../utils/mailSender");
const emailTemplate = require("../mail/templates/emailVerificationTemplate");
require("dotenv").config();

// send otp to user and save in db and then compare in the signup flow

exports.sendotp = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Email is required",
      });
    }

    // ⚡ 1. Check user (lean for speed)
    const existingUser = await User.findOne({ email }).lean();

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already registered",
      });
    }

    // ⚡ 2. Generate OTP (no DB loop)
    const otp = otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false,
    });

    // ⚡ 3. Save OTP directly (no extra queries)
    await OTP.create({
      email,
      otp,
      createdAt: new Date(),
    });

    mailSender(email, "Verification Email", emailTemplate(otp)).catch((err) =>
      console.error(err),
    );

    // ⚡ 5. Instant response
    return res.status(200).json({
      success: true,
      message: "OTP sent successfully",
    });
  } catch (error) {
    console.error("SEND OTP ERROR:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to send OTP",
    });
  }
};

exports.signup = async (req, res) => {
  try {
    // Destructure fields from the request body
    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      accountType,
      contactNumber,
      otp,
    } = req.body;
    // Check if All Details are there or not
    if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !confirmPassword ||
      !otp
    ) {
      return res.status(403).json({
        success: false,
        message: "All Fields are required",
      });
    }
    // Check if password and confirm password match
    if (password !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message:
          "Password and Confirm Password do not match. Please try again.",
      });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists. Please sign in to continue.",
      });
    }

    const response = await OTP.find({ email }).sort({ createdAt: -1 }).limit(1);
    if (response.length === 0) {
      return res.status(400).json({
        success: false,
        message: "The OTP is not valid ....Please Try Again",
      });
    } else if (otp != response[0].otp) {
      return res.status(400).json({
        success: false,
        message: "The OTP is not valid....Please recheck your otp",
      });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the user
    let approved = "";
    approved === "Instructor" ? (approved = false) : (approved = true);

    // Create the Additional Profile For User
    const profileDetails = await Profile.create({
      gender: null,
      dateOfBirth: null,
      about: null,
      contactNumber: null,
    });
    const user = await User.create({
      firstName,
      lastName,
      email,
      contactNumber,
      password: hashedPassword,
      accountType: accountType,
      approved: approved,
      additionalDetails: profileDetails._id,
      image: `https://api.dicebear.com/5.x/initials/svg?seed=${firstName} ${lastName}`,
    });

    return res.status(200).json({
      success: true,
      user,
      message: "User registered successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "User cannot be registered. Please try again.",
    });
  }
};

exports.login = async (req, res) => {
  try {
    // get data
    // validate data
    // user check exists or not
    // generate token and check password
    // create cookie
    // return response
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please Fill All the details",
        password,
        email,
      });
    }
    const user = await User.findOne({ email }).populate("additionalDetails");
    if (!user) {
      return res.status(401).json({
        success: true,
        message: "User Is Not Registered,Please signup",
      });
    }
    if (await bcrypt.compare(password, user.password)) {
      const payload = {
        email: user.email,
        accountType: user.accountType,
        id: user._id,
      };
      const token = await jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "2h",
      });
      user.token = token;
      user.password = undefined;
      const options = {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly: true,
      };
      return res.cookie("token", token, options).status(200).json({
        success: true,
        token,
        user,
        message: "Logged In successfully",
      });
    } else {
      return res.status(401).json({
        success: true,
        message: "Wrong Password",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Login Failed ,Please try again",
    });
  }
};

// change password

exports.changePassword = async (req, res) => {
  // data fetch
  const { oldpassword, password, newpassword } = req.body;
  // get old pass,new pass,confirn new pass
  // validation
  if (!oldpassword || !password || !newpassword) {
    return res.status(401).json({
      success: false,
      message: "Please fill all the details",
    });
  }
  // password update in db
  // send mail password updated
  // return res
};
