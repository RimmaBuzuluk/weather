import React from 'react';

const WeatherCard = ({ weatherData, loading, error }) => {
  if (loading) {
    return (
      <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white mx-auto mb-4"></div>
        <p className="text-white text-lg">Завантаження...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="left-left">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  if (!weatherData) {
    return (
      <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 text-center">
        <div className="text-white text-6xl mb-4">🌤️</div>
        <h2 className="text-white text-2xl font-bold mb-2">Прогноз погоди</h2>
        <p className="text-white/80">Введіть назву міста для отримання прогнозу</p>
      </div>
    );
  }

  const getWeatherIcon = (weatherMain) => {
    switch (weatherMain.toLowerCase()) {
      case 'snow':
        return '❄️';
      case 'rain':
        return '🌧️';
      case 'clear':
        return '☀️';
      case 'clouds':
        return '☁️';
      case 'thunderstorm':
        return '⛈️';
      case 'mist':
      case 'fog':
        return '🌫️';
      default:
        return '🌤️';
    }
  };

  return (
    <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 md:p-8 text-center shadow-2xl w-full max-w-md mx-auto mb-8">
      <div className="text-6xl mb-4">{getWeatherIcon(weatherData.weather[0].main)}</div>
      <h2 className="text-white text-3xl font-bold mb-2">{weatherData.name}</h2>
      <p className="text-white/80 text-lg mb-6 capitalize">
        {weatherData.weather[0].description}
      </p>
      
      <div className="text-white text-6xl font-bold mb-6">
        {Math.round(weatherData.main.temp)}°C
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
        <div className="bg-white/10 rounded-lg py-4">
          <div className="text-2xl mb-2">💧</div>
          <div className="text-white font-semibold">Вологість</div>
          <div className="text-white/80">{weatherData.main.humidity}%</div>
        </div>
        
        <div className="bg-white/10 rounded-lg py-4">
          <div className="text-2xl mb-2">💨</div>
          <div className="text-white font-semibold">Вітер</div>
          <div className="text-white/80">{weatherData.wind.speed} м/с</div>
        </div>
        
        <div className="bg-white/10 rounded-lg py-4">
          <div className="text-2xl mb-2">🌡️</div>
          <div className="text-white font-semibold">Температура</div>
          <div className="text-white/80">{Math.round(weatherData.main.temp)}°C</div>
        </div> 
        
       </div>
    </div>
  );
};

export default WeatherCard;
