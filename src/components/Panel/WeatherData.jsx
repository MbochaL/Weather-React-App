import React, { useState } from "react";
import SearchCity from "../CitySearch";
import Defaultcitys from "../DefaultCitys";
import Card from "../WeatherCard";

const WeatherData = () => {

    let urlWeather = "https://api.openweathermap.org/data/2.5/weather?appid=20047535c951b4f169c8bceae9960471&lang=es";
    let cityUrl = "&q=";

    let urlForecast = "https://api.openweathermap.org/data/2.5/forecast?appid=20047535c951b4f169c8bceae9960471&lang=es"

    const [weather, setWeather] = useState([]);
    const [forecast, setForecast] = useState([]);
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);
    const [location, setLocation] = useState("");

    const getLocation = async(loc) => {
        setLoading(true);
        setLocation(loc);
        
        urlWeather = urlWeather + cityUrl + loc;

        await fetch(urlWeather).then((response) =>{
            if(!response.ok) throw {response}
            return response.json();
        }).then((weatherData) =>{
            setWeather(weatherData);
        }).catch(error =>{
            console.log(error);
            setLoading(false);
            setShow(false);
        });

        urlForecast = urlForecast + cityUrl + loc;

        await fetch(urlForecast).then((response) =>{
            if(!response.ok) throw {response}
            return response.json();
        }).then((forecastData) =>{
            setForecast(forecastData);

            setLoading(false);
            setShow(true);

        }).catch(error =>{
            console.log(error);
            setLoading(false);
            setShow(false);
        });

    }


    return (
        <>
        <SearchCity
        newLocation = {getLocation}
        />      
        <Card
        showData = {show}
        loadingData = {loading}
        weather = {weather}
        forecast = {forecast}      
        />
        <Defaultcitys
         cityDefault = {getLocation}
        />
        </>
    )


}

export default WeatherData;