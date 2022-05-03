import express from 'express';
const userRoute = express.Router();
import userModel from '../models/UserModel.js';

userRoute.post('/register', async (req, res) => {
    const { name, email, password, contact, address } = req.body;

    const newUser = new userModel({ name, email, password, contact, address });

    try {
        newUser.save();
        return res.status(200).json({
            message: "User has been created successfully.",
            status: true
        })
    } catch (error) {
        return res.status(422).json({
            message: `something went wrong ${error}`,
            status: false
        });
    }
})

userRoute.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await userModel.find({email, password})

        if (user.length > 0){

            const currentUser = {
                name: user[0].name,
                email: user[0].email,
                address: user[0].address,
                contact: user[0].contact,
                isAdmin: user[0].isAdmin,
                _id: user[0]._id
            }
            res.send(currentUser)
        }
    } catch (error) {
        return res.status(422).json({
            message: `something went wrong ${error}`,
            status: false
        });
    }
})

userRoute.get('/get-all-users', async (req, res) => {

    try {
        const users = await userModel.find()
        res.send(users);
    } catch (error) {
        return res.status(400).json({
            message: 'something went wrong' + error
        })
    }
})

export default userRoute;