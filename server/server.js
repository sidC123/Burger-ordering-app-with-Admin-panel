import express from 'express';
import bodyParser from 'body-parser';
import colors from 'colors';
import cors from 'cors';
import mongoose from 'mongoose';
import burgersRoute from './routes/burgersRoute.js';
import userRoute from './routes/userRoute.js';
import orderRoute from './routes/ordersRoute.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json({ limit: "30mb", extended: true }));

app.get('/',(req, res)=>{
    res.send("Server Working 🔥 on port" + PORT )
})

// ALL ROUTES HERE----------
app.use('/api/burgers/', burgersRoute);
app.use('/api/user/', userRoute);
app.use('/api/orders/', orderRoute);


const CONNECTION_URL = 'mongodb+srv://siddheshC123:siddheshC123@cluster0.kviuo.mongodb.net/mern-burger'
const PORT = process.env.PORT || 5050;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port :${PORT}`.underline.yellow.inverse)))
    .catch((error) => console.log(error.message));