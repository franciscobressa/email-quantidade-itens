import express from "express";
import MailController from "./app/controllers/MailController"
require("dotenv").config()

const app = express();
app.use(express.json());
app.get("/", MailController.store)


app.listen(3000, () => {
    console.log('server is running on port 3000');
})