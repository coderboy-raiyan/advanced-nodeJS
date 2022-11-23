const mongoose = require('mongoose');

const postModel = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        imgUrl: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        creator: {
            type: String,
            required: true,
        },
    },
    { timestamps: true },
);

module.exports = mongoose.model('Post', postModel);
