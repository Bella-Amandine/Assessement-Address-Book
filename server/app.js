require('dotenv').config();
import express from 'express';
import bodyParser from 'body-parser';
// import addressRouter from "./api/routes/index";

const app = express();
const addressRouter = require('./api/routes/index')


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use("/api/address", addressRouter);

app.get('*', (req, res) => {
    res.json({
        success: 1,
        message: "This is rest api working"
    });
});

const port = process.env.PORT

app.listen(port, () => {
    console.log(`Server is running on port : ${port}`);
})