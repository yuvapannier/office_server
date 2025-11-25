import cors from "cors";
import express from 'express';
import nodemon from "nodemon";
import clientRoutes from "./routes/client-route.js";
import connectDB from "./lib/db.js";

const app = express();
const PORT = 6969;

//data understanding middleware. postman json understand
app.use(express.json());

connectDB();

app.get("/", (req, res) => {
    res.json({msg: "Hello Students"});
});

app.use("/client", clientRoutes);

app.listen(PORT, () => {
    console.log(`The server is running at http://localhost:${PORT}`)
})






