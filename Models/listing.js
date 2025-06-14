const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title : {
        type : String,
        required : true,
    },
    description : String,
    image : {
        type:String,
        default:
            "https://upload.wikimedia.org/wikipedia/commons/3/39/Typical_Street_In_The_Royal_Borough_Of_Kensington_And_Chelsea_In_London.jpg",
        set:(v)=>(v==="")?"https://upload.wikimedia.org/wikipedia/commons/3/39/Typical_Street_In_The_Royal_Borough_Of_Kensington_And_Chelsea_In_London.jpg":v,
    },
    price : Number,
    location : String,
    country : String,
});

const Listing = mongoose.model("Listing",listingSchema);
module.exports = Listing;