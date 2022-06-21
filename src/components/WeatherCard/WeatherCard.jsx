import React from "react";

 
const WeatherCard = ({loadingData, showData, weather, forecast}) => {

    var today = new Date();
    var day = today.getDay();
    var month = today.getMonth();
    var year = today.getFullYear();
    var date = day + '/' + month + '/' + year

    var url = "";
    var iconUrl = "";

    var iconUrlDay2 = "";
    var iconUrlDay3 = "";
    var iconUrlDay4 = "";
    var iconUrlDay5 = "";
    var iconUrlDay6 = "";

    var forecastDate2 = "";
    var forecastDate3 = "";
    var forecastDate4 = "";
    var forecastDate5 = "";
    var forecastDate6 = "";


    if(showData){
        url = "http://openweathermap.org/img/w/";
        iconUrl = url + weather.weather[0].icon + ".png";

        iconUrlDay2 = url + forecast.list[6].weather[0].icon + ".png";
        iconUrlDay3 = url + forecast.list[14].weather[0].icon + ".png";
        iconUrlDay4 = url + forecast.list[22].weather[0].icon + ".png";
        iconUrlDay5 = url + forecast.list[30].weather[0].icon + ".png";
        iconUrlDay6 = url + forecast.list[38].weather[0].icon + ".png";

        forecastDate2 = forecast.list[6].dt_txt.substring(8, 10) + '/' + forecast.list[6].dt_txt.substring(5, 7) + '/' + forecast.list[1].dt_txt.substring(0, 4) + ' ' +  forecast.list[6].dt_txt.substring(11, 13);
        forecastDate3 = forecast.list[14].dt_txt.substring(8, 10) + '/' + forecast.list[14].dt_txt.substring(5, 7) + '/' + forecast.list[1].dt_txt.substring(0, 4) + ' ' +  forecast.list[14].dt_txt.substring(11, 13);
        forecastDate4 = forecast.list[22].dt_txt.substring(8, 10) + '/' + forecast.list[22].dt_txt.substring(5, 7) + '/' + forecast.list[1].dt_txt.substring(0, 4) + ' ' +  forecast.list[22].dt_txt.substring(11, 13);
        forecastDate5 = forecast.list[30].dt_txt.substring(8, 10) + '/' + forecast.list[30].dt_txt.substring(5, 7) + '/' + forecast.list[1].dt_txt.substring(0, 4) + ' ' +  forecast.list[30].dt_txt.substring(11, 13);
        forecastDate6 = forecast.list[38].dt_txt.substring(8, 10) + '/' + forecast.list[38].dt_txt.substring(5, 7) + '/' + forecast.list[1].dt_txt.substring(0, 4) + ' ' +  forecast.list[38].dt_txt.substring(11, 13);

    }
    
    return (
        <div className="mt-5">
            {
                showData === true ? (
                    <div className="container">
                        <div className="card mb-3 mx-auto bg-dark text-light">
                             <div className="row g-0">
                                    <div className="col-md-4">
                                        <h3 className="card-title">{weather.name}</h3>
                                        <p className="card-date">{date}</p>
                                        <h1 className="card-temp">{(weather.main.temp - 273.15).toFixed(1)}°C</h1>
                                        <p className="card-desc"><img src={iconUrl} alt="icon"/>{weather.weather[0].description}</p>
                                        <img src="https://images.pexels.com/photos/2559484/pexels-photo-2559484.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="img-fluid rounded-start" alt="..."/>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body text-start mt-2">
                                            <h5 className="card-test">Temperatura max: {(weather.main.temp_max - 273.15).toFixed(1)}°C</h5>
                                            <h5 className="card-test">Temperatura min: {(weather.main.temp_min - 273.15).toFixed(1)}°C</h5>
                                            <h5 className="card-test">Sensacion termica: {(weather.main.feels_like - 273.15).toFixed(1)}°C</h5>
                                            <h5 className="card-test">Humedad: {(weather.main.humidity)}%</h5>
                                            <h5 className="card-test">Velocidad del Viento: {(weather.wind.speed)}m/s</h5>
                                        </div>
                                        <hr/>
                                        <div className="row mt-4">
                                            <div className="col">
                                                <p>{forecastDate2}h</p>
                                                <p className="description"><img src={iconUrlDay2} alt="icon"/>{forecast.list[6].weather[0].description}</p>
                                                <p className="temp">{(forecast.list[6].main.temp - 273.15).toFixed(1)}°C</p>
                                            </div>
                                            <div className="col">
                                                <p>{forecastDate3}h</p>
                                                <p className="description"><img src={iconUrlDay2} alt="icon"/>{forecast.list[6].weather[0].description}</p>
                                                <p className="temp">{(forecast.list[14].main.temp - 273.15).toFixed(1)}°C</p>
                                            </div>
                                            <div className="col">
                                                <p>{forecastDate4}h</p>
                                                <p className="description"><img src={iconUrlDay2} alt="icon"/>{forecast.list[6].weather[0].description}</p>
                                                <p className="temp">{(forecast.list[22].main.temp - 273.15).toFixed(1)}°C</p>
                                            </div>
                                            <div className="col">
                                                <p>{forecastDate5}h</p>
                                                <p className="description"><img src={iconUrlDay2} alt="icon"/>{forecast.list[6].weather[0].description}</p>
                                                <p className="temp">{(forecast.list[30].main.temp - 273.15).toFixed(1)}°C</p>
                                            </div>
                                            <div className="col">
                                                <p>{forecastDate6}h</p>
                                                <p className="description"><img src={iconUrlDay2} alt="icon"/>{forecast.list[6].weather[0].description}</p>
                                                <p className="temp">{(forecast.list[38].main.temp - 273.15).toFixed(1)}°C</p>
                                            </div>
                                            
                                            

                                        </div>
                                    </div>
                             </div>
                        </div>
                    </div>
                ):(
                    <h2 className="text-light">No hay datos disponibles</h2>
                )
            }     
        </div>
    )
}

export default WeatherCard;