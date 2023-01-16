const {Schema,model} = require('mongoose')

const Commentschema = new Schema({
    writtenBy:{
        type:Schema,

    },
    commentBody:{
        type: String,
    },
    createdAt:{
        type: Date,
        default:Date.now,
        get: (createdAtVal) => moment(createdAtVal).format('MMM DD, YYYY, h:mm:ss a')
    }
})


const comment = model('comment',Commentschema)
module.exports = comment