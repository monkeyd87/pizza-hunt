const {Pizza} = require('../models')
const pizza = require('../models/Pizza')


const pizzaController = {
    getAllPizza(req,res){
        Pizza.find({})
        .then(dbPizzaData=> res.json(dbPizzaData))
        .catch(err=> res.status(404).Json(err))
    },
    getPizzaById({params},res){
        Pizza.findById({_id:params.id})
        .then(data=>{
            if(!data){
                res.status(404).json({message:'pizza not Found'})
                return
            }
            res.json(data)
        })
        .catch(err=>{
            res.status(500).json(err)
        })
    },
    createPizza({body},res){
        Pizza.create(body)
        .then(data=>res.status(200).json(data))
        .catch(err=>res.status(500).json(err))
    },
    updatePizza({params,body},res){
        Pizza.findOneAndUpdate({_id:params.id},body,{ new: true })
        .then(data=>{
            if(!data){
                res.status(404).json({message:'pizza not found'})
                return
            }
            res.json(data)
        })
        .catch(err=> res.status(500).json(err))

    },
    deletePizza({params},res){
        Pizza.findOneAndDelete({_id:params.id})
        .then(data=>{
            if(!data){
                res.status(404).json({message:'pizza not found'})
                return
            }
            res.json(data)
        })
        .catch(err=> res.status(500).Json(err))
    }
       
}

module.exports = pizzaController