import React from 'react';
import axios from 'axios';
import moment from 'moment-timezone';
import Sidebar from './components/Sidebar';
import WeatherIcon from './components/WeatherIcon';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
      weatherData: null,
      location: '',
      timezone: null
		}
  }
  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => { 
        this.fetchWeatherData(position.coords.latitude, position.coords.longitude);
        this.reverseGeocode(position.coords.latitude, position.coords.longitude);
      }, (error) => { 
        console.log(error) 
      });
    }
  }
  changeLocation = (loc) => {
    this.setState({ location: loc });
  }
  reverseGeocode = (lat, long) => {
    axios.get(`https://www.mapquestapi.com/geocoding/v1/reverse?key=iGU4SqMrHyMr2tIFRCu36SkN3n2uUNtj&location=${lat}%2C${long}&outFormat=json&thumbMaps=false`)
      .then((response) => {
        this.setState({ location: response.data.results[0].locations[0].adminArea5 });
      })
      .catch((error) => {
        console.log(error);
      });
  }
	fetchWeatherData = (lat, long) => {
    axios.get(`/forecast/4661e7b286a3ea7974d722fcf62b5ea9/${lat},${long}`)
      .then((response) => {
        this.setState({ weatherData: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <div className="flex h-screen bg-center bg-cover" style={{ backgroundImage:`url("https://images.unsplash.com/photo-1501612272219-9f77e47daef5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80")` }}>
        <section className="flex flex-col justify-between w-2/3 h-full px-24 pt-16 pb-24">
          <span className="text-2xl font-semibold tracking-wider text-white">weather.app</span>
          <div className="flex items-center font-semibold leading-none text-white">
            <span className="text-6xl">{ this.state.weatherData ? this.state.weatherData.currently.temperature.toFixed() + '°' : '...'}</span>
            <div className="px-16">
              <span className="text-6xl">{ this.state.location ? this.state.location : '...' }</span>
              { this.state.weatherData ? 
                <span className="block pt-3 pl-1 text-2xl">{ moment().tz(this.state.weatherData.timezone).format('h:mm a / ddd, MMM Do YYYY') }</span> :
                <span className="block pt-3 pl-1 text-2xl">{ moment().format('h:mm a / ddd MMM Do YYYY') }</span>
              }
            </div>
            <div className="flex items-center">
              { this.state.weatherData ? <WeatherIcon className="h-32 text-white fill-current" icon={ this.state.weatherData.currently.icon } /> : null }
              <span className="text-2xl leading-none">{ this.state.weatherData ? this.state.weatherData.currently.summary : '...' }</span>
            </div>
          </div>
        </section>
        <section className="w-1/3 h-full">
          <Sidebar weatherData={ this.state.weatherData } location={ this.state.location } changeLocation={ this.changeLocation } fetchWeatherData={ this.fetchWeatherData } />
        </section>
      </div>
    );
  }
}

export default App;
