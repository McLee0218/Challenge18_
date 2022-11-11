const { Schema, Types } = require('mongoose');
// const { stringify } = require('querystring');
// const thoughtSchema = require('./Reaction')

const thoughtSchema = new Schema({
    thoughText: {
        type: String,
        required: true,
        midlength: 1,
        maxlength: 280,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    username: {
        type: String,
        required: true,
    },
    },
    {
        toJSON: {
          getters: true,
        },
        id: false,
    },
);

module.exports = thoughtSchema;