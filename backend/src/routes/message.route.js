import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import { getMessages, getUsersForSidebar, sendMessage } from "../controllers/message.controller.js";

const router = express.Router();

router.get("/users", protectRoute, getUsersForSidebar); //getUsersForSidebar
router.get("/:id", protectRoute, getMessages); // get all messages between two different users

router.post("/send/:id", protectRoute, sendMessage); // protectRoute because we don't want to allow unauthenticated users to send the messages

export default router;
