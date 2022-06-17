import express from "express";
import MailController from "./app/controllers/MailController"
import axios from "axios";
require("dotenv").config()
const cors = require("cors")

const app = express();
app.use(cors())
app.use(express.json());
app.get("/", MailController.store)

app.get("/getProducts", async(req, res) => {
    const { data } = await axios.get(
        `https://vtexstore.codeby.com.br/api/catalog_system/pub/products/search`
    );
    res.json(data);
})


app.listen(5000, () => {
    console.log('server is running on port 5000');
})