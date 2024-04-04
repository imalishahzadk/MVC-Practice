const mongoose= require("mongoose")
const emp= mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    mobile:{
        type:Number,
        required: true
    },
    password:{
        type:String,
        required: true
    }
})
const User= mongoose.model("User", emp)
const City= mongoose.model("City", emp)
module.exports= User
module.exports=City