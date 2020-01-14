import React from 'react';
import axios from 'axios';
import ForecastTile from './ForecastTile';

class Sidebar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			location: '',
			searchAheadResults: []
		}
	}
	changeLocation = (e) => {
		let searchTerm = e.target.value.trim();
		if (searchTerm.length % 2 !== 0 && searchTerm.length > 2 && searchTerm !== this.state.location.trim()) {
			this.searchAhead(searchTerm);
		}
		if (searchTerm.length < 3) {
			this.setState({ searchAheadResults: [] });
		}
		this.setState({ location: e.target.value });
	}
	geolocate = (searchAheadLoc) => {
    axios.get(`/.netlify/functions/geolocate?location=${searchAheadLoc}`, { responseType: 'text' })
      .then((response) => {
				const newLoc = response.data.results[0].locations[0].adminArea5;
				let latLng = response.data.results[0].locations[0].latLng;
				this.setState({ location: newLoc, searchAheadResults: [] });
				this.props.fetchWeatherData(latLng.lat, latLng.lng, newLoc);
      });
	}
	searchAhead = (location) => {
		axios.get(`/.netlify/functions/search_ahead?location=${location}`, { responseType: 'text' })
			.then((response) => {
				this.setState({ searchAheadResults: response.data.results })
			});
	}
	render() {
		return (
		<div className="flex justify-center h-full px-10 pt-16 overflow-y-scroll" style={{ backgroundColor: 'rgba(26, 32, 44, 0.75)' }}>
			<div className="w-full">
				<div className="relative flex items-center pb-2 border-b border-b-2 border-gray-500">
					<input className="z-10 w-full py-1 pl-8 mr-3 text-lg leading-tight text-white bg-transparent border-none appearance-none focus:outline-none" value={ this.state.location } onChange={ this.changeLocation } type="text" placeholder="Location" aria-label="Location" />
					<div className="absolute inset-0 flex items-center">
						<svg className="w-8 h-8 text-white fill-current"><path d="M16.32 14.9l5.39 5.4a1 1 0 01-1.42 1.4l-5.38-5.38a8 8 0 111.41-1.41zM10 16a6 6 0 100-12 6 6 0 000 12z" /></svg>
					</div>
				</div>
				{ this.state.searchAheadResults.length > 0 ?
				<div className="relative">
					<ul className="absolute w-full overflow-hidden bg-white rounded-b-lg shadow-xl">
						{
							this.state.searchAheadResults.map((location, index) => {
								return <li onClick={ () => this.geolocate(location.displayString) } key={index} className="block px-5 py-3 cursor-pointer hover:bg-gray-300">{ location.displayString }</li>
							})
						}
					</ul>
				</div>
				: null
				} 
				<span className="block pt-12 text-3xl font-semibold text-white">Today</span>
				<div>
					<div className="flex justify-between pt-10">
						<span className="block text-lg text-white">Description</span>
						<span className="block text-lg text-white">{ this.props.weatherData ? this.props.weatherData.daily.data[0].summary : '...' }</span>
					</div>
					<div className="flex justify-between pt-10">
						<span className="block text-lg text-white">Precipitation</span>
						<span className="block text-lg text-white">{ this.props.weatherData ? this.props.weatherData.daily.data[0].precipProbability + '%' : '...' }</span>
					</div>
					<div className="flex justify-between pt-10">
						<span className="block text-lg text-white">Humidity</span>
						<span className="block text-lg text-white">{ this.props.weatherData ? this.props.weatherData.daily.data[0].humidity : '...' }</span>
					</div>
					<div className="flex justify-between pt-10">
						<span className="block text-lg text-white">High / Low</span>
						<span className="block text-lg text-white">{ this.props.weatherData ? this.props.weatherData.daily.data[0].temperatureHigh.toFixed() + '° / ' + this.props.weatherData.daily.data[0].temperatureLow.toFixed() + '°'  : '...' }</span>
					</div>
					<div className="flex justify-between pt-10">
						<span className="block text-lg text-white">Wind</span>
						<span className="block text-lg text-white">{ this.props.weatherData ? this.props.weatherData.daily.data[0].windSpeed.toFixed() + ' mph' : '...' }</span>
					</div>
				</div>
				<div className="py-12">
					<span className="block text-3xl font-semibold text-white">7 Day</span>
					<div className="mt-10 bg-gray-700 rounded shadow-xl h-forecast-tomorrow-card">
						{ this.props.weatherData ? <ForecastTile timezone={ this.props.weatherData.timezone } daysAway={ 1 } weatherData={ this.props.weatherData.daily.data[1] } /> : null }
					</div>
					<div className="flex flex-wrap pt-2 -mx-2">
						{
							this.props.weatherData ? this.props.weatherData.daily.data.slice(2).map((day, index) => {
								return <div className="w-1/3 px-2 pt-4 rounded" key={ index }>
									<div className="bg-gray-700 rounded shadow-lg">
										<ForecastTile timezone={ this.props.weatherData.timezone } daysAway={ index + 2 } weatherData={ day } />
									</div>
							</div>
							}) :
							[...Array(6)].map((x, index) => {
								return <div className="w-1/3 px-2 pt-4 rounded" key={ index }>
									<div className="bg-gray-700 rounded shadow-lg h-forecast-card"></div>
								</div>
							})
						}
					</div>
				</div>
			</div>
		</div>
		)
	}
}

export default Sidebar;