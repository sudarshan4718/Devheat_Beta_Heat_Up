import express from "express"
import cors from "cors"
import mongoose from "mongoose"

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

// mongoose.connect("localhost://27017/avdb" , {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }, () => {
//     console.log("DB Connected")
// })


async function connectToDatabase() {
  try {
    await mongoose.connect('mongodb://localhost:27017/AvRegister', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

connectToDatabase();

const userSchema = new mongoose.Schema({
  name : String,
  email : String,
  password : String
})

const User = new mongoose.model("User", userSchema)



//Routes
app.post("/login", (req,res) => {
  const {email, password} =req.body
  User.findOne({email : email}, (err,user) => {
    if(user){
      if(password == user.password) {
        res.send({message: "Login Successfull", user: user})
      }
      else{
        res.send({message:"Pssword incorrect"})
      }
    }
    else{
      res.send("User not registered")
    }
  })
})

app.post("/register", (req,res) => {            
   const {name, email, password} =req.body
   User.findOne({email: email},(err,user) => {         // If email exists then
      if(user){
        res.send({message : "User already registered"})
      }
   })
   const user = new User({
    name,
    email,
    password
   })
   user.save( err => {                  // Saving the users info in database
    if(err) {
      res.send(err)
    }
    else {
      res.send({message: "Successfully Registered"})
    }
   })
})

// app.get("/", (req,res) => {
//   res.send("My API");
// })

// const uri = 'mongodb://127.0.0.1:27017/AvLogin';

// mongoose.connect(uri, {
//   serverSelectionTimeoutMS: 5000
// }).catch(err => console.log(err.reason));

app.listen(9000,() => {
    console.log("BE started at port 9000")
})

// const mongoose = require("mongoose");


// mongoose.connect("mongodb://127.0.0.1:27017/SignUp", {
//     useNewUrlParser:true ,
//     useUnifiedTopology:true
// }).then(() => {
//     console.log(`Connection Successful`);

// }).catch((e) =>{
//     console.log(`No Connection.`)
// })

