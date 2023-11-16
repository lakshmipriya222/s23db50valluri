const mongoose = require("mongoose")
const vehiclesSchema = mongoose.Schema({
    vehicle_brand: {
        type: String,
        required:[true,"Vehicle brand Name is required"]
    },
    vehicle_type: {
        type: String,
        required:true
    },
    vehicle_cost: {
        type: String,
        required:true
    }
    })
module.exports = mongoose.model("Vehicle",vehiclesSchema)