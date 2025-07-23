const mongoose = require('mongoose');
const schema = mongoose.Schema;
const annonuncementchema = new schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    createdBy: {
        type: String,
        required: true
    }
});
const Announcement = mongoose.model('Announcement', annonuncementchema);
module.exports = Announcement;
