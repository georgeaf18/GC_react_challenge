import axios, {AxiosResponse} from "axios";
import {CurrentWeather} from "../models/current-weather.interface";

const instance = axios.create({
    baseURL: 'http://api.openweathermap.org/data/2.5/',
    timeout: 15000
})

instance.interceptors.request.use(config => {
    config.params = {
      ...config.params,
      units: "imperial",
      appid: 'd6a0e97e0514684c4554e0c3cc81bea8'
    };
    return config;
  });
  

const responseBody  = (response: AxiosResponse) => response.data;

const requests = {
    get: (url: string, query: string) => instance.get(url, {params: {q: query}}).then(responseBody),
	post: (url: string, body: {}) => instance.post(url, body).then(responseBody),
	put: (url: string, body: {}) => instance.put(url, body).then(responseBody),
	delete: (url: string) => instance.delete(url).then(responseBody),
}

export const Weather = {

    // used to get the current weather of a city
	getCityCurrentWeather: (query: string): Promise<CurrentWeather> => requests.get(`weather`, query)
};