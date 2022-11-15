const mongoose = require('mongoose') 
const { Schema } = mongoose

const Campaign = mongoose.model(
    'Campaign',
    new Schema({
        nameCampaign: {
            type: String,
            required: true
        },  
        country: {
            type: String,
            required: true
        },
        conversion: {
            type: String,
            required: true
        },
        bid: {
            type: String,
            required: true
        }
    },
    { timestamps: true},
    ),
)

module.exports = Campaign