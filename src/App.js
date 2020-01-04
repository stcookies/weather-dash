import React from 'react';
import axios from 'axios';
import moment from 'moment';
import Sidebar from './components/Sidebar';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
      weatherData: null,
      location: ''
		}
  }
  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => { 
        this.fetchWeatherData(position.coords.latitude, position.coords.longitude);
        this.fetchLocationData(position.coords.latitude, position.coords.longitude);
      }, (error) => { 
        console.log(error) 
      });
    }
  }
  changeLocation = (loc) => {
    axios.get(`https://www.mapquestapi.com/geocoding/v1/address?key=iGU4SqMrHyMr2tIFRCu36SkN3n2uUNtj&inFormat=kvp&outFormat=json&location=${loc}&thumbMaps=false`)
      .then((response) => {
        this.setState({ location: response.data.results[0].locations[0].adminArea5 });
        let latLng = response.data.results[0].locations[0].latLng;
        this.fetchWeatherData(latLng.lat, latLng.lng);
      });
  }
  fetchLocationData = (lat, long) => {
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
      <div className="flex h-screen bg-center bg-cover" style={{ backgroundImage:`url("https://images.unsplash.com/photo-1468608374703-abdfab03d1bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=100")` }}>
        <section className="flex flex-col justify-between w-2/3 h-full px-24 pt-16 pb-24">
          <span className="text-2xl font-semibold tracking-wider text-white">weather.app</span>
          <div className="flex font-semibold leading-none text-white">
            <span className="text-6xl">{ this.state.weatherData ? this.state.weatherData.currently.temperature.toFixed() + '°' : '...'}</span>
            <div className="px-16">
              <span className="text-6xl">{ this.state.location ? this.state.location : '...' }</span>
              <span className="block pt-2 pl-1 text-2xl">{ moment().format('h:mm a - MMM Do YYYY') }</span>
            </div>
            <span className="self-center text-2xl">{ this.state.weatherData ? this.state.weatherData.currently.summary : '...' }</span>
          </div>
        </section>
        <section className="w-1/3 h-full">
          <Sidebar weatherData={ this.state.weatherData } location={ this.state.location } changeLocation={ this.changeLocation } />
        </section>
      </div>
    );
  }
}

export default App;
