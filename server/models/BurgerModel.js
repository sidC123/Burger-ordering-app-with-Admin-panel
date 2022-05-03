import mongoose from "mongoose";

const burgerSchema = mongoose.Schema(
    {
        name: { type: String, required: true, },
        variants: [],
        prices: [],
        category: { type: String, required: true, },
        image: { type: String, required: true, },
        description: { type: String, required: true, }
    },
    {
        timestamps: true,
    }
);

const BurgerModel = mongoose.model('burgers', burgerSchema);
export default BurgerModel;
// module.exports = BurgerModel;