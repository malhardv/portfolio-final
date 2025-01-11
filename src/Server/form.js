import express from "express"
import bodyParser from "body-parser";
import cors from "cors"
import mongoose from "mongoose";
import { Viewer } from "./models/viewer.js";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url))

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

mongoose
    .connect(process.env.MONGO_URI)
    .then(()=> console.log('Connected to MongoDB!'))
    .catch((err) => console.error('Error connecting to MongoDB: ', err))

// Route to handle form submission
app.post('/contact', async (req, res) => {
    const { name, email, message } = req.body   
    const viewer = new Viewer({
        name,
        email,
        message
    });

    try {
        const savedContact = await viewer.save();
        console.log('Saved Contact: ', savedContact);
        res.status(201).json({ message: "Thanks for reaching out! I'll get back to you soon." });
    } catch(error) {
        console.error('Error Saving Contact: ', error);
        res.status(500).json({ message: 'Something went wrong. Please try again later.' })
    }
});

app.use(express.static(path.join(__dirname, "../../dist")))

app.get("/", (req, res) => {
    res.sendFile(__dirname + "../../dist/index.html")
})

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});