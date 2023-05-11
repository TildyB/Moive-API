
const dotenv = require("dotenv");
dotenv.config();
const env = process.env;
const mongoose = require("mongoose");
const express = require('express');
const login = require('./routes/login');
const reviews = require('./routes/reviews');
const cors = require('cors');
const User = require("./models/user");
const jwt = require("jsonwebtoken");
const { safeParseFc } = require("./utilities/safeParseFc");
const getIdToken = require("./token/google");
const { z } = require("zod");

const app = express();

app.use(cors())
app.use(express.json());
// app.use('/api/reviews', reviews)

/* const Payload = z.object({
    name: z.string(),
    sub: z.string(),
    email: z.string().email(),
  }); */

app.get('/', (req, res) => {
    res.send('Hello World!')
})


/* app.post("/api/login", verify(LoginRequestSchema),  async (req, res) => {
    const loginRequest = req.body
    const idToken = await getIdToken(loginRequest.code);
    if (!idToken) return res.status(401);
    const payload = jwt.decode(idToken);
    const result = safeParseFc(Payload, payload);
  
    if (!result) {
      return res.sendStatus(500);
    }
    
    const data = result
    const user = await User.findOne({sub: data.sub})
  
    
    if (!user) {
      const newUser = await User.create(data) 
      const sessionToken = jwt.sign({newUser}, env.JWT_SECRET_KEY);
      return res.send({sessionToken, username: newUser.name});
    }  
    const sessionToken = jwt.sign({user}, env.JWT_SECRET_KEY);
    res.send({sessionToken, username: user.name});
  }); */


/*  mongoose.connect(env.MONGO_URL)
 .then(() => {
    app.listen(env.PORT, () => console.log(`Server running at port ${env.PORT} for Movie reviews`))
  })
  .catch((error) => {
    console.error(error)
  }) */

  app.listen(5000, () => {
    console.log("Running on port 5000.");
  });

module.exports = app;