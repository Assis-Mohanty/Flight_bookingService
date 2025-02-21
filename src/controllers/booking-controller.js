const {BookingService}=require("../services/index")
const {StatusCodes}=require("http-status-codes")

const bookingService=new BookingService();
const {createChannel,publishMessage}=require("../utils/messageQueue")
const {REMINDER_BINDING_KEY}=require("../config/serverConfig")
class BookingController {
    

    constructor(channel){
        this.channel=channel
    }
    async sendMessageToQueue(req,res){
        const channel=await createChannel();
        const payload={
            data:{
                subject:"This is a notification from queue",
                content:"Some queue will subscribe this ",
                recepientEmail:"assis.mohanty.98@gmail.com",
                notificationTime:"2025-02-21 20:28:23"
            },
            service:"CREATE_TICKET"
        }
        publishMessage(channel,REMINDER_BINDING_KEY,JSON.stringify(payload));
        return res.status(200).json({
            message:"Successfully published the event"
        })
    }

    async create (req , res) {
        try {
            const response = await bookingService.createBooking(req.body);
            return res.status(StatusCodes.OK).json({
                message:"Successfully completed booking",
                success:true,
                err:{},
                data:response
            })
        } catch (error) {
            return res.status(error.statusCode).json({
                message:error.message,
                success:false,
                err:error.explaination,
                data:{}
            })
        }
    }
}

module.exports=BookingController;