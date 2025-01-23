const express = require('express')
const mongoose = require('mongoose');
const app = express()
const dotenv = require('dotenv');
const router = require('./router');
const cors = require('cors')
dotenv.config()

const DB_URL = process.env.DB_URL
const PORT = process.env.PORT || 5005 


app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use(cors())
app.use(express.json())
app.use("/foods", router)



mongoose.connect(DB_URL)
  .then(() => {
    console.log('Connected!')
    app.listen(PORT, () => {
        console.log(`Example app listening on port ${PORT}`)
      })

});