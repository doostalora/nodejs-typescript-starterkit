import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema({
    name:  String,
    price: Number,
    quantity: Number
});

const Item = mongoose.model("Item", ItemSchema);
export default Item;
