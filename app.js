const express = require('express')
const app = express()
const cors = require("cors")
const mongoose = require('mongoose')

// middle ware
app.use(express.json())
app.use(cors())

//product schema
const sneackersSchema = mongoose.Schema({
  name:{
    type:String,
    required:[true, "please provide product name"],
    unique:[true, "please provide unique name"],
    minLength:[3, "name atleast 3 characters"],
    maxLength:[100, "name is too large"]
  },
  description:{
    type:String,
    required:true
  },
  price:{
    type:Number,
    required:true,
    min:[0, "price can't be negative"]
  },
  quantity:{
    type:Number,
    trim:true,
    required:true,
    validate:{
      validator:(values)=>{
        const isInteger = Number.isInteger(values);
        if(isInteger){
          return true
        }else{
          return false
        }
      }
    },
    message:"quantity must be an integer"
  },
  unit:{
    type:String,
    required:true,
    enum:{
      values:['pcs', 'pair', 'dozen'],
      message: "unit can't {value}, please add pcs/pair/dozen"
    }
  }, 
  status:{
    type:String,
    required:true,
    enum:{
      values:['sold-out', 'in-stock', 'descountinue'],
      message:"status can't {value}, "
    }
    
  }
},{
  // optional schema
  timestamps:true
})


//schema model
const Sneackers = mongoose.model('Sneackers', sneackersSchema)


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/api/v1/Sneackers', async(req, res, next) =>{

 try{
   //save // create
   const sneackers = new Sneackers(req.body);
   const result = await sneackers.save();
 
   res.status(200).json({
     message:'data insert successfully',
     data : result
   });
 }catch(err){
  res.status(400).json({
    status:'fail',
    message:'data not inserted',
    error:err.message
  })
 }
})

module.exports = app;