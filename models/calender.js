const mongoose = require("mongoose");

const calendrierSchema = new mongoose.Schema({
    days of the week:{
      type:String,
      required: true ,
    }
    
    

      start_date: {
        type: Number,
        required: true,
      },
      end_date : {
        type: Number,
        min: 0,
      },

      Event: {
        type: [String],
      },
      
      
});
const calendrier = mongoose.model("Calendrier", calendrierSchema);
module.exports = calendrier;