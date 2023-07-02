const mongoose=require("mongoose");

const jobSchema=mongoose.Schema({
    title:{
        type:String,
        required:[true,"please enter title"]
    },
    description:{
        type:String,
        required:[true,"please enter description"]
    },
    type:{
        type:String,
        required:[true,"please enter description"]
    },
    category:{
        type:String,
        required:[true,"please enter Category"]
    },
    hours:{
        type:String,
        required:[true,"please enter category"]
    },
    stipend:{
        type:String,
        required:[true,"please enter Stipend"]
    },
    applications:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"employee" 
        }
    ],
    enrolledEmployees:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"employee"
        }
    ],
    organization:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"organization",
    
    },
    projects:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Project"
      }],
    createdAt:{
        type:Date,
        default:Date.now,
    }
})

module.exports=mongoose.model("jobs",jobSchema);
