const mongose=require("mongoose")

const orderDetails=new mongose.Schema({
    GameName:String,
    Discription:String,
    TotalPrice:String,
    Quantity:Number,
    payerName:String,
    cardNumber:Number,
})

const OrderList= new mongose.model("UserDetails",orderDetails);
module.exports=OrderList;