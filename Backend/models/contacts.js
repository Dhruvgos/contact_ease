const mongoose = require('mongoose');
const { Schema } = mongoose;
const noteSchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    phone: {
        type:String,
        required :true
    },
    name: {
        type:String,
        required :true
    },
    
    email:{
       type:String,
       required:true,
       
    }
   
});
module.exports = mongoose.model('contacts',noteSchema);