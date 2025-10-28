import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import WeatherBackground from './components/WeatherBackground';
import WeatherCard from './components/WeatherCard';
import SearchForm from './components/SearchForm';
import { useSelector } from 'react-redux';

function WeatherApp() {
  const { data, loading, error } = useSelector((state) => state.weather);
  
  const getWeatherType = () => {
    if (!data) return 'none';
    const weatherMain = data.weather[0].main.toLowerCase();
    console.log('weatherMain',weatherMain)
    switch (weatherMain) {
      case 'snow':
        return 'snow';
      case 'rain':
        return 'rain';
      case 'drizzle':
        return 'rain';
      case 'clear':
        return 'clear';
      case 'clouds':
        return 'clouds';
      case 'thunderstorm':
        return 'thunderstorm';
      default:
        return 'clouds';
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <WeatherBackground weatherType={getWeatherType()} />
      
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-8">
        <div className="w-full max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-8 drop-shadow-lg">
            Прогноз погоди
          </h1>
          
          <SearchForm />
          
          <div className="flex justify-center">
            <WeatherCard 
              weatherData={data} 
              loading={loading} 
              error={error} 
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <WeatherApp />
    </Provider>
  );
}

export default App;
