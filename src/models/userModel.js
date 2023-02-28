const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema( 
    {
        fullname:{
            type: String,
            require: true,
            
            unique: true,
        },
        email: {
            type: String,
            required: true, 
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        phone:{
            type: Number,
            required: true,
        },
        profilePicture: {
            type: String,
            default: "",
        },
        description: {
            type: String,
            max: 50,
        },
        isDeleted:{
            type:String,
            default:false
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
