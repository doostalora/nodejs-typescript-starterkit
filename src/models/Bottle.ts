import mongoose from "mongoose";

const BottleSchema = new mongoose.Schema({
    name:  String,
    price: Number,
    quantity: Number
});

const Bottle = mongoose.model("Bottle", BottleSchema);
export default Bottle;
