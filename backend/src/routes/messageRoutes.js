import express from "express"
import { getMesssages, getUsersForSidebar, sendMessages } from "../controllers/messageControllers.js"

const router=express.Router()

router.get("/users",getUsersForSidebar)
router.get("/messages/:id",getMesssages)
router.post("/send",sendMessages)


export default router
