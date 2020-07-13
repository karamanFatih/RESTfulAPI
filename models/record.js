const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const recordSchema = new Schema({
    name: String,
    host: {
        host_name: String,
        host_location: String,
        host_picture_url:String
    },
    accommodates: Number,
    bedrooms: Number,
    beds: Number,
    bathrooms: Number,
    amenities: Array,

    images: {
        picture_url: String
    },
    address: {
        street: String,
        suburb: String,
        government_area: String,
        market: String,
        country: String,
        country_code: String
    },
    summary: String,
    price: Number,
    monthly_price: null,
    weekly_price: null,
    security_deposit: Number,
    cleaning_fee: Number,

    review_score: {
        review_scores_rating: Number,
        review_scores_location: Number,
        review_scores_cleanline: Number
    },

    reviews:[{
        date: Date,
        reviewer_name: String,
        comments: String
    }],

    space: String,
    neighborhood_overview: String,
    notes: String,
    transit: String,
    access: String,
    interaction: String
});

module.exports = mongoose.model('record',recordSchema);
