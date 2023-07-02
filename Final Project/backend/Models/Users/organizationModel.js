const mongoose=require("mongoose")
const validator=require("validator");
const jwt=require("jsonwebtoken");
const bcrypt=require("bcryptjs");

const organizationSchema=mongoose.Schema({
    orgName:{
        type:String,
        required:[true,"Organizzation name is required"]
    },
    orgEmail:{
        type:String,
        required:[true,"Please enter your email"],
        unique:true,
        validate:[validator.isEmail,"Please enter a valid email"]
    },
    phone:{
        type:String,
        required:[true,"Please enter your phone"]
    },
    orgType:{
        type:String,
        required:[true,"Please enter organization type"]
    },
    password:{
        type:String,
        required:[true,"Please enter your password"],
        minLength:[8,"Password should be greater than 8"],
        select:false
    },
    bio:{
        type: String,
    },
    github:{
        type: String,
    },
    twitter:{
        type: String,
    },
    instagram:{
        type: String,
    },
    avatar:{
        public_id:{
            type:String,
            required:true
        },
        url:{
            type:String,
            required:true
        }

    },
    jobs:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"jobs"
        }
    ],
    projects:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Project"
      }],
    recievedRequests: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "employee"
      }, {
        type: mongoose.Schema.Types.ObjectId,
        ref: "organization"
      }],
      sentRequests: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "employee"
      }, {
        type: mongoose.Schema.Types.ObjectId,
        ref: "organization"
      }],
      connections: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "employee"
      }, {
        type: mongoose.Schema.Types.ObjectId,
        ref: "organization"
      }],
      notifications:[{
        type:String
      }],
    role:{
        type:String,
        default:"Organization"
    }
})

organizationSchema.methods.getJWTToken=function(){
    return jwt.sign({id:this._id},process.env.JWT_SECRET,{
        expiresIn:process.env.JWT_EXPIRE
    })
}

organizationSchema.pre("save",async function(next){
    if(!this.isModified("password")){
        next() 
    }
this.password=await bcrypt.hash(this.password,10)
})

organizationSchema.methods.comparePassword=async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password)
}


module.exports=mongoose.model("organization",organizationSchema);