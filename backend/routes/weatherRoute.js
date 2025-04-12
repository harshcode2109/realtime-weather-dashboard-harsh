import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

export const getWeather = async (req, res) => {
  try {
    const city = req.query.city;
    // console.log(city);

    if (!city) {
      return res.status(400).json({ message: "City is required" });
    }
    const apiKey = process.env.OPENWEATHER_API_KEY;
    const weatherResponse = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    const data = weatherResponse.data;

    // console.log(data);
    res.status(200).json({
      city: data.name,
      wind: data.wind.speed,
      temperature: data.main.temp,
      condition: data.weather[0].description,
      icon: data.weather[0].icon,
      humidity: data.main.humidity,
    });
  } catch (error) {
    if (error.response && error.response.status == 404) {
      return res.status(404).json({ message: "Invalid city name" });
    }
    // console.log(error);

    res.status(500).json({ message: "Error fetching weather data " });
  }
};
