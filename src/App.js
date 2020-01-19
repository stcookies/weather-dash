import React from 'react';
import axios from 'axios';
import moment from 'moment-timezone';
import Sidebar from './components/Sidebar';
import WeatherIcon from './components/WeatherIcon';
import Logo from './assets/img/logo.png';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
      weatherData: null,
      location: '',
      searchQuery: '',
      bgImg: '',
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
  bg = {
    'clear-day': 'https://images.unsplash.com/photo-1438129460879-8f5868d4a802?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80',
    'clear-night': 'https://images.unsplash.com/photo-1496467606013-2b7b9caa2a67?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80',
    'cloudy': "https://images.unsplash.com/photo-1501612272219-9f77e47daef5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80",
    'fog': 'https://images.unsplash.com/photo-1444837881208-4d46d5c1f127?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80',
    'hail': 'https://images.unsplash.com/photo-1545100759-51547f8d7cfa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80',
    'partly-cloudy-day': 'https://images.unsplash.com/photo-1525962137416-8c60b5f498e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80',
    'partly-cloudy-night': 'https://images.unsplash.com/photo-1501418611786-e29f9929fe03?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80',
    'rain': 'https://images.unsplash.com/photo-1486016006115-74a41448aea2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80',
    'sleet': 'https://images.unsplash.com/photo-1444384851176-6e23071c6127?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80',
    'snow': 'https://images.unsplash.com/photo-1558897979-72a433ed5f8d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80',
    'tornado': 'https://images.unsplash.com/photo-1527482937786-6608f6e14c15?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80',
    'wind': 'https://images.unsplash.com/photo-1534683929189-28d18a7856a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80'
  }
  changeLocation = (loc) => {
    this.setState({ location: loc });
  }
  changeQuery = (e) => {
    this.setState({ searchQuery: e.target.value });
  }
  searchGoogle = (e, searchArrowClicked) => {
    if (this.state.searchQuery !== '') {
      if (searchArrowClicked || e.key === 'Enter') {
        window.open(`https://google.com/search?q=${this.state.searchQuery}`);
      }
    }
  }
  reverseGeocode = (lat, long) => {
    axios.get(`/.netlify/functions/reverse_geolocate?lat=${lat}&long=${long}`, { responseType: 'text' })
      .then((response) => {
        this.setState({ location: response.data.results[0].locations[0].adminArea5 });
      })
      .catch((error) => {
        console.log(error);
      });
  }
	fetchWeatherData = (lat, long, loc) => {
    axios.get(`/.netlify/functions/forecast?lat=${lat}&long=${long}`, { responseType: 'text' })
      .then((response) => {
        this.setState({ weatherData: response.data, bgImg: this.bg[response.data.currently.icon] });
        if (loc) {
          this.setState({ location: loc });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <div className="h-screen bg-gray-700 bg-center bg-cover" style={{ backgroundImage:`url(${this.state.bgImg})` }}>
        <section className="flex flex-col justify-between h-full px-24 pt-16 pb-24">
          <div className="flex wide:items-center compact:flex-col wide:flex-row">
            <img className="h-8" src={ Logo } alt="Weather Dash Logo" />
            <div className="relative wide:mx-10 wide:mt-1 compact:mt-4 w-search">
              <div className="absolute inset-y-0 left-0 flex items-center pl-4">
                <svg className="w-5 h-5" viewBox="0 0 533.5 544.3">
                  <defs/>
                  <path fill="#4285f4" d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"/>
                  <path fill="#34a853" d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"/>
                  <path fill="#fbbc04" d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"/>
                  <path fill="#ea4335" d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"/>
                </svg>
              </div>
              <input onKeyPress={ this.searchGoogle } onChange={ this.changeQuery } className="block w-full px-12 py-2 text-gray-900 placeholder-gray-900 bg-white rounded-full focus:shadow-outline" placeholder="Search with Google" />
              <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                <svg onClick={ () => this.searchGoogle(null, true) } className="w-5 h-5 text-gray-700 cursor-pointer fill-current" viewBox="0 0 24 24">
                  <defs/>
                  <path d="M18.59 13H3a1 1 0 010-2h15.59l-5.3-5.3a1 1 0 111.42-1.4l7 7a1 1 0 010 1.4l-7 7a1 1 0 01-1.42-1.4l5.3-5.3z" className="heroicon-ui"/>
                </svg>
              </div>
            </div>
          </div>
          { this.state.weatherData ? 
          <div className="flex flex-wrap font-semibold leading-none text-white compact:flex-col wide:flex-row wide:items-center">
            <div className="order-1 hidden wide:block">
              <span className="text-6xl">{ this.state.weatherData.currently.temperature.toFixed() + '°' }</span>
            </div>
            <div className="flex items-center order-3 compact:order-1">
              <WeatherIcon className="h-16 text-white fill-current" icon={ this.state.weatherData.currently.icon } />
              <span className="pl-3 text-2xl leading-none wide:pl-6">{ this.state.weatherData.currently.summary }</span>
              <span className="pl-6 text-6xl wide:hidden">{ this.state.weatherData.currently.temperature.toFixed() + '°' }</span>
            </div>
            <div className="wide:order-2 compact:flex-grow-1 compact:pt-6 compact:order-3 wide:px-16">
              <span className="text-6xl">{ this.state.location }</span>
              <span className="block pt-3 pl-1 text-2xl">{ moment().tz(this.state.weatherData.timezone).format('h:mm a / ddd, MMM Do YYYY') }</span>
            </div>
          </div>
          : null
          }
        </section>
        <section className="absolute top-0 right-0 h-full shadow-xl w-sidebar">
          <Sidebar weatherData={ this.state.weatherData } location={ this.state.location } fetchWeatherData={ this.fetchWeatherData } />
        </section>
      </div>
    );
  }
}

export default App;
