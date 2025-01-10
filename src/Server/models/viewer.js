import mongoose from "mongoose";

const ViewerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
    date: { type: Date, default: Date.now }
})

export const Viewer = mongoose.model("Viewer", ViewerSchema)