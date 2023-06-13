import { Place } from "../models/placeModel.js";

export const placeController = {
    getAllData: (req, res) => {
        Place.find().then(data => {
            res.status(200).send(data);
        }).catch(err => {
            res.status(500).send({ 'msg': 'Not Found' })
        })
    },
    getDataById: (req, res) => {
        Place.findById(req.params.id).then(data => {
            res.status(200).send(data);
        }).catch(err => {
            res.status(500).send({ 'msg': 'Not Found' })
        })
    },
    addPlace: async (req, res) => {

        Place.create({
            placeName: req.body.placeName,
            placeImage: req.body.placeImage,
            placeDetails: req.body.placeDetails,
            locationName: req.body.locationName,
            longitude: req.body.longitude,
            latitude: req.body.latitude,
            contactInfo: req.body.contactInfo,
            websiteInfo: req.body.websiteInfo,
            placeRating: req.body.placeRating
        }).then(data => {
            res.status(201).send(data)
        }).catch(err => {
            res.status(500).send({ 'mgs': 'Couldnt Created' })
        })
    },
    deleteById: (req, res) => {
        console.log(req.params.id);
        Place.findByIdAndDelete(req.params.id).then(data => {
            res.status(200).send(data);
            
        }).catch(err => {
            res.status(500).send({ "msg": "Couldnt deleted" });
        })
    }
}