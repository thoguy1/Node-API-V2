require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const productRoute = require('./routes/productRoute');
const errorMiddleware = require('./middleware/errorMiddleware');
const cors = require('cors')

const app = express();

const PORT = process.env.PORT || 3000
const MONGO_URL = process.env.MONGO_URL

// middleware
app.use(cors())
app.use(express.json()) // to use json data
app.use(express.urlencoded({extended: false})) // to use form data


// routes

app.use('/api/products', productRoute)

app.get('/', (req, res) => {
  res.send('Hello Node API');
})

app.get('/blog', (req, res) => {
  res.send('Hello Blog My name is Petrus');
})

app.use(errorMiddleware);

mongoose.connect(MONGO_URL)
.then(() => {
  console.log('Connected to MongoDB')
  app.listen(PORT, () => {
    console.log(`Node API app is running on port ${PORT}`);
  })
}).catch((error) => {
  console.log(error);
})