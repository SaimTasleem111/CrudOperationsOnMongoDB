const mongoose=require("mongoose");

const UserSchema=mongoose.Schema({
    username :{
    type: String,
    lowercase: true,
    required:true
    },
    password: {
        type:String,
        required:true
    }
});

const UserModel=mongoose.model("Saim",UserSchema);

module.exports=UserModel;