const modelFood = require("../models/index")

const getAllFoods = async(req, res)=>{
    try {
        const foods = await modelFood.find()
        res.status(200).json(foods)
    } catch (error) {
        res.status(500).send({message: error.message})
    }
}
const getFoodById = async(req, res)=>{
    const id = req.params.id
    try {
        const food = await modelFood.findById(id)
        res.status(200).json(food)
    } catch (error) {
        res.status(500).send({message: error.message})
    }
}

const deleteFood = async(req, res)=>{
    const id = req.params.id
    try {
        const deleted = await modelFood.findByIdAndDelete(id)
        res.status(200).json({message: "deleted succesfully!", deleted: deleted})
    } catch (error) {
        res.status(500).send({message: error.message})
    }
}

const postFood = async(req, res)=>{
    try {
        const newFood = modelFood({...req.body})
        await newFood.save()
    } catch (error) {
        res.status(500).send({message: error.message})
        
    }
}

module.exports = {
    getAllFoods,
    getFoodById,
    deleteFood,
    postFood
}