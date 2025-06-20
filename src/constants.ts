const GEOCODING_API_BASE = "https://geocoding-api.open-meteo.com/v1/search";
const WEATHER_API_BASE = "https://api.open-meteo.com/v1/forecast";

const GEOCODING_API_DEFAULT_PARAMS = new URLSearchParams({
  count: "10",
  language: "en",
  format: "json",
});

const WEATHER_API_DEFAULT_PARAMS = new URLSearchParams({
  hourly: "temperature_2m",
  current: "temperature_2m,precipitation,is_day,rain",
});

export {
  GEOCODING_API_BASE,
  WEATHER_API_DEFAULT_PARAMS,
  WEATHER_API_BASE,
  GEOCODING_API_DEFAULT_PARAMS,
};
