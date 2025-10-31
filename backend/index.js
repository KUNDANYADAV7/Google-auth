const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
require('./models/dbConnect');
const authRoutes = require('./routes/authRoutes');
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use('/auth/', authRoutes); // <- NEW LINE

app.all('*', (req, res) => {
  res.status(404).json({
    status: "fail",
    message: `Can't find ${req.originalUrl} on the server`
  });
});


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})