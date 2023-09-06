const express = require("express");
const router = express.Router();
const {getAll ,getById ,creatRes, deleteById, updateById} =require ('../controllers/restaurant.controller')


router.get("/restaurant", getAll);
router.get("/restaurant/:id", getById)
router.post('/restaurant',creatRes)
router.delete('/restaurant/:id',deleteById)
router.put('/restaurant/:id',updateById)

module.exports = router;
