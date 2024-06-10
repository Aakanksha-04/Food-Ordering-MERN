import mongoose from "mongoose"

export const connectDb = async () => {
    await mongoose.connect('mongodb+srv://aakanksha1604be21:yLg4mpIRdh30LYxu@clusterfooddelivery.j59jt7u.mongodb.net/food-del',{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(()=>{
        console.log("db connected");
    })
    .catch((err)=>{
        console.log(err);
        console.log("db not connected")
    })
}