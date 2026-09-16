import express from "express"
import { getMessages, sendMessages } from "../controllers/messageControllers.js";

const router=express.Router()

router.post("/send",sendMessages)
router.post("/get", getMessages);


export default router