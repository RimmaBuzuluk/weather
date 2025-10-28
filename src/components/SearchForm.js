import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCity, fetchWeather, clearError } from '../store/weatherSlice';

const SearchForm = () => {
  const [inputCity, setInputCity] = useState('');
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.weather);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputCity.trim()) {
      dispatch(clearError());
      dispatch(setCity(inputCity.trim()));
      dispatch(fetchWeather(inputCity.trim()));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto mb-8">
      <div className="flex flex-col sm:flex-row gap-4">
        <input
          type="text"
          value={inputCity}
          onChange={(e) => setInputCity(e.target.value)}
          placeholder="Введіть назву міста"
          className="flex-1 px-4 py-3 rounded-lg bg-white/20 backdrop-blur-md text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-200"
          disabled={loading}
        />
        <button
          type="submit"
          disabled={loading || !inputCity.trim()}
          className="px-6 py-3 bg-white/20 backdrop-blur-md text-white font-semibold rounded-lg border border-white/30 hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Завантаження...' : 'Показати погоду'}
        </button>
      </div>
   
    </form>
  );
};

export default SearchForm;
