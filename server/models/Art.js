const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const artSchema = new Schema({
    title: {
        type: String,
        required: 'You need a title',
        minlength: 1,
        maxlength: 280
    },
    artist:
    {
        type: Schema.Types.ObjectId,
        ref: 'Artist',
    },

    added: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    },
    medium: {
        type: String,
        required: true,
        enum: {
            values: ['painting', 'sculpture', 'photograph', 'NFT'],
            message: '{VALUE} is not a valid medium'
        }
    },
    description: {
        type: String,
        required: true,
        minlength: [10, 'Description must be at least 10 characters long.'],
        maxlength: [500, 'Description cannot exceed 500 characters.']
    }
});

const Art = model('Art', artSchema);

module.exports = Art;
