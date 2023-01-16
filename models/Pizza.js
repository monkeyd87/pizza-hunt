const {Schema, model} = require('mongoose')
const moment = require('moment')


const Pizzaschema =  new Schema({
    pizzaName: {
        type: String
    },
    createdBy: {
        type: String
    },
    createdAt: {
        type: Date,
        default:Date.now,
        get: (createdAtVal) => moment(createdAtVal).format('MMM DD, YYYY, h:mm:ss a')
    }, 
    size:{
        type: String
    },
    toppings:[]
})

const pizza = model('pizza',Pizzaschema)

module.exports = pizza