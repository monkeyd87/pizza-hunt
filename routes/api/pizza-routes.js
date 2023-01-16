const router = require('express').Router()
const {
    getAllPizza,
    createPizza,
    deletePizza,
    getPizzaById,
    updatePizza,



} = require('../../controllers/pizza-controller') 

router.route('/')
.get(getAllPizza)
.post(createPizza)


router.route('/:id')
.get(getPizzaById)
.put(updatePizza)
.delete(deletePizza)


module.exports = router