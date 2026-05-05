import mongoose from "mongoose";

const connectMongoDB = async () =>{
  try{
  await mongoose.connect(process.env.MONGODB_URI);
  if(mongoose.connection.readyState===1){
  console.log("connectd to MongoDB");}
  else{
   console.log("Not connectd to MongoDB");
  }
  }
  catch(error){
    console.log(error)
  }
};

export default connectMongoDB