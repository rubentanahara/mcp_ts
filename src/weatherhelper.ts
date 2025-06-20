import {
  GEOCODING_API_BASE,
  GEOCODING_API_DEFAULT_PARAMS,
  WEATHER_API_BASE,
  WEATHER_API_DEFAULT_PARAMS,
} from "./constants";
import type {
  GeocodingApiResponse,
  LocationResult,
  WeatherResponse,
} from "./types";

async function fetchCityData(city: string): Promise<LocationResult | null> {
  const url = new URL(GEOCODING_API_BASE);
  url.search = GEOCODING_API_DEFAULT_PARAMS.toString();
  url.searchParams.set("name", city);

  const response = await fetch(url.toString());

  if (!response.ok) {
    return null;
  }

  const data = (await response.json()) as GeocodingApiResponse;

  if (!data.results || data.results.length === 0) {
    return null;
  }

  return data.results[0] as LocationResult;
}

async function fetchWeather(
  latitude: number,
  longitude: number,
): Promise<WeatherResponse | null> {
  const url = new URL(WEATHER_API_BASE);
  url.search = WEATHER_API_DEFAULT_PARAMS.toString();
  url.searchParams.set("latitude", latitude.toString());
  url.searchParams.set("longitude", longitude.toString());

  const response = await fetch(url.toString());

  if (!response.ok) {
    return null;
  }

  return (await response.json()) as WeatherResponse;
}

export { fetchCityData, fetchWeather };
