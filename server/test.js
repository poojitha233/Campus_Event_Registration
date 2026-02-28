require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Essential bridge

const app = express();
app.use(cors()); // Allow Frontend to talk to Backend
app.use(express.json()); // Allow server to read JSON data

const PORT = 5055;

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Connected to MongoDB Atlas! ✅"))
    .catch(err => console.log("Database error: ", err));

// THE REGISTRATION ROUTE
app.post('/register', async (req, res) => {
    try {
        const { name, email } = req.body;
        console.log("New Registration:", name, email);
        // For now, we just send a success message back
        res.status(200).send("Student Registered Successfully!");
    } catch (err) {
        res.status(500).send("Error saving data");
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});