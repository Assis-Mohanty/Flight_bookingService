const express =require("express")

const {BookingController}=require("../../controllers/index")
const {createChannel}=require("../../utils/messageQueue")
const channel=createChannel();
const bookingController=new BookingController(channel)
const router=express.Router()

router.post("/bookings",bookingController.create)
router.post("/publish",bookingController.sendMessageToQueue)
module.exports=router;