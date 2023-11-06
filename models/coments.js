const mongoose = require('mongoose');


const commentSchema = new mongoose.Schema({
    content: {
        type: String,
        require: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }
},{
    timeseries: true
});

const comment = mongoose.model('comment', commentSchema);

module.exports = comment;