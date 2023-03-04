const expres=require("express");
const app=expres();
app.use(expres.json());
const cors=require("cors")
app.use(cors())
const PORT=8000;

require("./src/routs/connection")
const OrderList=require("./src/schema/schema")
app.post("/order",async(req, res)=>{
    const data= new OrderList({
        GameName:req.body.GameName,
        Discription:req.body.Discription,
        TotalPrice:req.body.TotalPrice,
        Quantity:req.body.Quantity,
        payerName:req.body.payerName,
        cardNumber:req.body.cardNumber

    })
    data.save().then(()=>{ res.json({status:"success"})}).catch((err)=>{console.log(err)});
                  
})



app.listen(PORT, ()=>{
    console.log(`server is running at ${PORT}`)
})