const express = require("express")

const {getAllFoods, getFoodById, deleteFood, postFood} = require("../controllers/index")

const router = express.Router()

router.get("/", getAllFoods)
router.get("/:id", getFoodById)
router.delete("/:id", deleteFood)
router.post("/", postFood)

module.exports = router