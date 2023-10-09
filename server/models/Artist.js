const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const artistSchema = new Schema({
    name: {
        type: String,
        required: 'Artist needs a name',
        minlength: 1,
        maxlength: 50
    },
    style: {
        type: String,
        required: 'Artist needs a style',
        minlength: 1,
        maxlength: 50
    },
    bio: {
        type: String,
        required: true,
        minlength: [10, 'Description must be at least 10 characters long.'],
        maxlength: [2000, 'Description cannot exceed 2000 characters.']
    },
    art: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Art'
        }
    ]
});

const Artist = model('Artist', artistSchema);

module.exports = Artist;
