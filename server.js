const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// MongoDB connection
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.error(err));

app.get('/', (req, res) => {
    res.json({ message: "Welcome to DressStore application" });
});

// Use routes
app.use(require('./routes/product.routes'));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
