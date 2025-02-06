import mongoose from "mongoose";

let empSchema=mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,unique:true,required:true},
    age:{type:Number,required:true},
    salary:{type:Number,required:true},

})

let empModel=mongoose.model("emp",empSchema);
export default empModel;