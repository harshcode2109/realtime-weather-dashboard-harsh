import React, { useState } from "react";
import SearchBar from "./components/SearchBar.jsx";
import WeatherCard from "./components/WeatherCard.jsx";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  // console.log("weatherData=>", weatherData);
  const handleSearch = async (city) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `http://localhost:4000/weather?city=${city}`
      );
      setLoading(false);

      setWeatherData(response.data);
    } catch (error) {
      setLoading(false);
      setWeatherData(null);
      console.log(error);

      if (error.response) {
        if (error.response.status === 404) {
          toast.error("Invalid City Name");
        } else {
          toast.error("Some error occurred please try again later");
        }
      }
    }
  };
  return (
    <div className="min-h-screen  bg-yellow-100 p-6  ">
      <h1 className=" text-3xl font-bold  text-center text-blue-800">
        Weather Dashboard
      </h1>
      <div className="max-w-2xl  mx-auto ">
        <SearchBar onSearch={handleSearch} />
        {loading ? (
          <div className="flex justify-center mt-10 ">
            <div class="spinner-border   " role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </div>
        ) : weatherData ? (
          <WeatherCard weather={weatherData} />
        ) : (
          <h2 className="text-blue-800 font-semibold text-center mt-20 text-2xl ">
            Get real-time weather updates by searching for a city in the search
            bar.
          </h2>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};
export default App;
