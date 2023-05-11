
const dotenv = require("dotenv");
dotenv.config();
const env = process.env;
const mongoose = require("mongoose");
const express = require('express');
const login = require('./routes/login');
const reviews = require('./routes/reviews');
const cors = require('cors');

const app = express();

app.use(cors())
app.use(express.json());
app.use('/api/login', login)
// app.use('/api/reviews', reviews)



 mongoose.connect(env.MONGO_URL)
 .then(() => {
    app.listen(env.PORT, () => console.log(`Server running at port ${env.PORT} for Movie reviews`))
  })
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })

module.exports = app;