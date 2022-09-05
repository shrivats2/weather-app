import React from "react";
import axios from "axios";

// Components
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "29f1fdea02f8751ea1945ef022dbb331";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      city_name: "London",
      temp: "15",
      humidity: "24",
      wind: "2.5",
      weather_status: "Drizzle",
      weather_desc: "Light intensity drizzle",
      weather_icon: "10n"
    };
  }

  findLocation = event => {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(this.currentLocation);
  }

  currentLocation = position => {
    let longitude = position.coords.longitude;
    let latitude = position.coords.latitude;

    let apiKey = "29f1fdea02f8751ea1945ef022dbb331";
    let unit = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${unit}`;

    axios.get(apiUrl)
      .then(result => {
        this.setState({
          city_name: result.data.name,
          temp: result.data.main.temp,
          humidty: result.data.main.humidity,
          wind: result.data.wind.speed,
          weather_status: result.data.weather[0].main,
          weather_desc: result.data.weather[0].description,
          weather_icon: result.data.weather[0].icon
        });
      });
  };

  handleChange = e => {
    this.setState({
      term: e.target.value
    });
  };

  handleClick = () => {
    axios
      .post(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        this.state.term +
        "&units=metric&appid=" +
        API_KEY
      )
      .then(res => {
        this.setState({
          city_name: res.data.name,
          temp: res.data.main.temp,
          humidty: res.data.main.humidity,
          wind: res.data.wind.speed,
          weather_status: res.data.weather[0].main,
          weather_desc: res.data.weather[0].description,
          weather_icon: res.data.weather[0].icon
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="App">
        <div class="container glass">
          <div class="top">
            <p className="header">Weather App</p>
          </div>
          <Form onChange={this.handleChange} onClick={this.handleClick} findLocation={this.findLocation} />
          <Weather data={this.state} />
        </div>
      </div>
    );
  }
}
