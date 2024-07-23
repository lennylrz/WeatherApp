import React, {useState, useEffect} from "react";
import styles from './Weather.css'

function Weather() {
    const [temp, setTemp] = useState()
    const [weatherConditon, setWeatherCondition] = useState()
    useEffect(() => {
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=52.5275432&lon=13.399275&appid=&units=metric')
    .then(response => {
        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`)
        }
        return response.json()
    })
    .then(data => {
        let tempObj = data.main.temp;
        let weatherConditionObj = data.weather[0].main;
        setTemp(Math.floor(tempObj))
        setWeatherCondition(weatherConditionObj)

    })
    }, [])
    return (
    <div className="container">
    <div className="Weather">
        <span className="Weather1">It is currently {temp}° C in Berlin. Ladies and Gentleman, The Weather Condition is: {weatherConditon}.</span>
    </div>
    </div>
    )
}

export default Weather
