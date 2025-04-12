import React from "react";

const WeatherCard = ({ weather }) => {
  const { city, wind, temperature, condition, icon, humidity } = weather;

  return (
    <div className="max-w-2xl mx-auto bg-gradient-to-br from-blue-100 to-blue-300 text-gray-900 shadow-2xl rounded-3xl p-8 mt-10">
      <div className="flex flex-col sm:flex-row items-center justify-between">
        <div className="text-center sm:text-left">
          <h2 className="text-4xl font-extrabold">{city}</h2>
          <p className="text-xl font-medium capitalize mt-1">{condition}</p>
        </div>
        <img
          src={`https://openweathermap.org/img/wn/${icon}@4x.png`}
          alt="weather icon"
          className="w-32 h-32"
        />
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
        <div className="bg-white/60 p-4 rounded-2xl shadow-md">
          <p className="text-lg font-semibold">Wind</p>
          <p className="text-xl font-bold">{wind} m/s</p>
        </div>
        <div className="bg-white/60 p-4 rounded-2xl shadow-md">
          <p className="text-lg font-semibold">Temperature</p>
          <p className="text-xl font-bold">{temperature} °C</p>
        </div>
        <div className="bg-white/60 p-4 rounded-2xl shadow-md">
          <p className="text-lg font-semibold">Humidity</p>
          <p className="text-xl font-bold">{humidity}%</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
