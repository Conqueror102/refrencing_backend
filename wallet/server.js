const express = require("express");
require("dotenv/config");
const connectDB = require("./config/db");
const userRoute = require("./routes/userRoute");
const walletRoute = require("./routes/walletRoute");
const morgan = require("morgan")

const { PORT } = process.env
const port = PORT

app = express()
app.use(express.json());
app.use(morgan("dev"));

connectDB();

app.use('/api', userRoute);
app.use("/api", walletRoute);

app.listen(port,()=>{
    console.log(new Date().toLocaleDateString(),port);
})

