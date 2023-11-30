const mongoose = require("mongoose")
const vehiclesSchema = mongoose.Schema({
    vehicle_brand: {
        type: String,
        required:[true,"Vehicle brand Name is required"]
    },
    vehicle_type: {
        type: String,
        required:true,
        maxLength:10
    },
    vehicle_cost: {
        type: Number,
        required:true,
        min: 0,
        max: 10000000

    }
    })
module.exports = mongoose.model("Vehicle",vehiclesSchema)