import mongoose from "mongoose";

const placeSchema = new mongoose.Schema({
    placeName:String,
    placeImage:String,
    placeDetails:String,
    locationName:String,
    longitude:Number,
    latitude:Number,
    contactInfo:String,
    websiteInfo:String,
    placeRating:String
},{
    versionKey:false,
    timestamps:true
})


export const Place = mongoose.model('Place',placeSchema);