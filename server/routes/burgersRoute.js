import express from 'express';
const burgerRoute = express.Router();
import BurgerModel from '../models/BurgerModel.js';

burgerRoute.get("/get-all-burgers", async (req, res)=>{

    try {
        const burgers = await BurgerModel.find({});
        res.send(burgers);
    } catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }
})

burgerRoute.post("/add-burger", async (req, res)=>{

    const burger = req.body.burger

    try {
        const newBurger = new BurgerModel({
            name: burger.name,
            image: burger.image,
            variants: ['small', 'large'],
            description: burger.description,
            category: burger.category,
            prices: [burger.prices]
        })
    
        await newBurger.save()

        res.send('New Burger added successfully')
    } catch (error) {
        return res.status(400).json({
            message: 'something went wrong' + error,
        })
    }
})


burgerRoute.post("/get-burger-by-id", async (req, res)=>{

    const burgerId = req.body.burgerId

    try {
        const burgers = await BurgerModel.findOne({_id : burgerId});
        res.send(burgers);
    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }
})


burgerRoute.post('/update-burger', async (req, res)=>{

    const updatedBurger = req.body.updatedBurger;
    
    try {
        const burger = await BurgerModel.findOne({_id : updatedBurger._id});

        burger.name = updatedBurger.name
        burger.description = updatedBurger.description
        burger.image = updatedBurger.image
        burger.category = updatedBurger.category
        burger.prices = [updatedBurger.prices]

        await burger.save()

        res.send('Burger details updated successfully')

    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }
})

burgerRoute.post('/delete-burger', async (req, res)=>{
    const burgerId = req.body.burgerId

    try {
        await BurgerModel.findOneAndDelete({_id : burgerId})
        res.send("Burger deleted successfully.")
    } catch (error) {
        return res.status(400).json({
            message: "spmethinng went wrong" + error
        })
    }
})

export default burgerRoute;