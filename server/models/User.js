const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    google: {
        googleId: {
            type: String,
            required: true,
        },
        displayName: {
            type: String,
            required: true,
        },
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        image: {
            type: String,
        },
        email: {
            type: String,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        administra: {
            type: Boolean,
            default: false,
        },
    },
    local: {
        email: {
            type: String,
        },
        password: {
            type: String,
        },
    },
});

module.exports = mongoose.model('User', UserSchema);
