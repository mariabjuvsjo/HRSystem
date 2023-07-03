const mongoose = require("mongoose")


const hourRaportSchema = new mongoose.Schema({

    employee: {
        type: mongoose.Types.ObjectId,
        ref: 'Employee'
    },
    year: Number,
    month: Number,
    monthRaport: [{
        startTime: {
            type: Date,
            default: () => Date.now(),
        }
        ,
        stopTime: {
            type: Date,
            default: () => Date.now()
        }
        ,
        totalTime: Number,
        saturday: {
            type: Boolean,
            default: false
        }
        ,
        sunday: {
            type: Boolean,
            default: false
        }
        ,
        holiday: {
            type: Boolean,
            default: false
        }
    }],
    accepted: {
        type: Boolean,
        default: false
    },
    sentIn: {
        type: Boolean,
        default: false
    }



}, { timestamps: true });

const HourRaport = mongoose.model("HourRaport", hourRaportSchema);

module.exports = HourRaport