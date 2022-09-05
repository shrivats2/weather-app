import React from "react";
import moment from "moment";

const Weather = props => (
  <div className="weather_data">
    <div className="weather_title">
      <div className="weather_update">
        <img
          src={`http://openweathermap.org/img/wn/${props.data.weather_icon}@2x.png`}
          alt="weather_ico" className="img"
        />
        <p className="description"> {props.data.weather_status} </p>
        <p className="temp">
          Temp : {props.data.temp}°C
        </p>
      </div>
      <p className="day"> {props.data.city_name} </p>
    </div>
    <div className="weather_status">
      <p className="date">{moment().format('dddd')}, <span>{moment().format('LL')}</span></p>
      <p className="moredesp"> {props.data.weather_desc} </p>
      <p className="humid">
        Humidity : <span>{props.data.humidity}%</span>
      </p>
      <p className="wind">
        Wind : <span>{props.data.wind}km/s</span>
      </p>
    </div>
  </div>
);

export default Weather;
