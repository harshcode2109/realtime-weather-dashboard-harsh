import express from "express";
const app = express();
import dotenv from "dotenv";
import { getWeather } from "./routes/weatherRoute.js";
import cors from "cors";
dotenv.config();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 4001;

//routes

app.get("/weather", getWeather);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
