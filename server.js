const express = require('express');
require("dotenv/config");
const connectDB = require('./CONFIG/db');
const userRouter = require('./ROUTES/userRoutes');
const detailRouter = require('./ROUTES/detailRoute');
const morgan = require('morgan');

const { PORT } = process.env;
const port = PORT;

const app = express();
app.use(express.json());
app.use(morgan('dev'));

connectDB();
app.use('/api', userRouter);
app.use('/api', detailRouter);

app.listen(port, () => {
    console.log(new Date().toLocaleDateString(),port);
});
