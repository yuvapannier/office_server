import cors from "cors";
import express from 'express';
import nodemon from "nodemon";

const app = express();
const port = 2411;

app.use(express.json());

