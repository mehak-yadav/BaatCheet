import jwt from "jsonwebtoken"; //needed to validate the token
import User from "../models/user.model.js";

//function
export const protectRoute = async (req, res, next) => {
  try {
    //checking whether there is token or not
    const token = req.cookies.jwt;

    if (!token) {
      return res.status(401).json({ message: "Unauthorized - No Token Provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded) {
      //false token
      return res.status(401).json({ message: "Unauthorized - Invalid Token" });
    }

    // if the token is validated then find the user
    const user = await User.findById(decoded.userId).select("-password"); //select everything from user except the password

    // if user not found(to make our code more robust)
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    req.user = user; //if user authenticated, add user to the request and move to next function that is update profile in this case

    next();
  } catch (error) {
    console.log("Error in protectRoute middleware: ", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
