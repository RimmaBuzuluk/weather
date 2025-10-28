import React from 'react';

const WeatherBackground = ({ weatherType }) => {
  const getWeatherClass = () => {
    switch (weatherType) {
      case 'snow':
        return 'bg-gradient-to-b from-blue-400 to-blue-600';
      case 'rain':
        return 'bg-gradient-to-b from-gray-400 to-gray-600';
      case 'clear':
        return 'bg-gradient-to-b from-yellow-300 to-orange-400';
      case 'clouds':
        return 'bg-gradient-to-b from-gray-300 to-gray-500';
      case 'thunderstorm':
        return 'bg-gradient-to-b from-purple-600 to-gray-800';
      default:
        return 'bg-gradient-to-b from-blue-300 to-blue-500';
    }
  };

  const renderWeatherEffect = () => {
    switch (weatherType) {
      case 'snow':
        return (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="absolute text-white text-2xl animate-snow opacity-80"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${3 + Math.random() * 2}s`,
                }}
              >
                ❄
              </div>
            ))}
          </div>
        );
      case 'rain':
        return (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(100)].map((_, i) => (
              <div
                key={i}
                className="absolute w-0.5 h-8 bg-blue-300 animate-rain opacity-70"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${0.5 + Math.random() * 0.5}s`,
                }}
              />
            ))}
          </div>
        );
      case 'clear':
        return (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-10 right-10 text-yellow-200 text-6xl animate-sunshine">
              ☀️
            </div>
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-yellow-200 rounded-full animate-sunshine opacity-60"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                }}
              />
            ))}
          </div>
        );
      case 'clouds':
        return (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className="absolute text-white text-4xl opacity-60"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 50}%`,
                  animationDelay: `${Math.random() * 5}s`,
                }}
              >
                ☁️
              </div>
            ))}
          </div>
        );
      case 'thunderstorm':
        return (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="absolute text-yellow-300 text-3xl opacity-80"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 50}%`,
                  animationDelay: `${Math.random() * 3}s`,
                }}
              >
                ⚡
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`fixed inset-0 ${getWeatherClass()} transition-all duration-1000`}>
      {renderWeatherEffect()}
    </div>
  );
};

export default WeatherBackground;
