import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_URL = 'https://api.openweathermap.org/data/2.5/weather';
const apiKey = process.env.REACT_APP_API_KEY;
const CACHE_DURATION = 10 * 60 * 1000;

const saveToCache = (city, data) => {
  const cacheData = {
    data,
    timestamp: Date.now(),
  };
  localStorage.setItem(city.toLowerCase(), JSON.stringify(cacheData));
};

const getFromCache = (city) => {
  const cached = localStorage.getItem(city.toLowerCase());
  if (!cached) return null;

  const { data, timestamp } = JSON.parse(cached);
  if (Date.now() - timestamp < CACHE_DURATION) {
    console.log('✅ Дані взято з кешу:', city);
    return data;
  } else {
    localStorage.removeItem(city.toLowerCase());
    return null;
  }
};

export const fetchWeather = createAsyncThunk(
  'weather/fetchWeather',
  async (city, { rejectWithValue }) => {
    try {
      const cachedData = getFromCache(city);
      if (cachedData) return cachedData;

      const response = await fetch(
        `${API_URL}?q=${city}&appid=${apiKey}&units=metric&lang=uk`
      );

      if (!response.ok) {
        throw new Error('Місто не знайдено');
      }

      const data = await response.json();
      saveToCache(city, data);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    data: null,
    loading: false,
    error: null,
    city: '',
  },
  reducers: {
    setCity: (state, action) => {
      state.city = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setCity, clearError } = weatherSlice.actions;
export default weatherSlice.reducer;
