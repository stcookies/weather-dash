import React from 'react';
import axios from 'axios';
import ForecastTile from './ForecastTile';

class Sidebar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			location: ''
		}
	}
	changeLocation = (e) => {
		this.setState({ location: e.target.value });
	}
	geocode = () => {
		if (this.state.location === '') { return; }
    axios.get(`https://www.mapquestapi.com/geocoding/v1/address?key=iGU4SqMrHyMr2tIFRCu36SkN3n2uUNtj&inFormat=kvp&outFormat=json&location=${this.state.location}&thumbMaps=false`)
      .then((response) => {
				const newLoc = response.data.results[0].locations[0].adminArea5;
        this.setState({ location: newLoc });
        let latLng = response.data.results[0].locations[0].latLng;
				this.props.fetchWeatherData(latLng.lat, latLng.lng);
				this.props.changeLocation(newLoc)
      });
	}
	render() {
		return (
		<div className="h-full px-24 pt-16 overflow-y-scroll" style={{ backgroundColor: 'rgba(26, 32, 44, 0.75)' }}>
			<div className="relative flex items-center pb-2 border-b border-b-2 border-gray-500">
				<input className="z-10 w-full py-1 pl-8 mr-3 text-lg leading-tight text-white bg-transparent border-none appearance-none focus:outline-none" value={ this.state.location } onChange={ this.changeLocation } type="text" placeholder="Location" aria-label="Location" />
				<div className="absolute inset-0 flex items-center">
					<svg className="w-8 h-8 text-white fill-current"><path d="M16.32 14.9l5.39 5.4a1 1 0 01-1.42 1.4l-5.38-5.38a8 8 0 111.41-1.41zM10 16a6 6 0 100-12 6 6 0 000 12z" /></svg>
				</div>
			</div>
			<span onClick={ () => this.geocode() } className="block pt-12 text-3xl font-semibold text-white">Today</span>
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
				<div className="h-48 mt-10 bg-gray-700 rounded shadow-xl">
					{ this.props.weatherData ? <ForecastTile weatherData={ this.props.weatherData.daily.data[1] } /> : null }
				</div>

				<div className="flex flex-wrap pt-2 -mx-2">
					{
						this.props.weatherData ? this.props.weatherData.daily.data.slice(2).map((day, index) => {
							return <div className="w-1/3 px-2 pt-4 rounded">
								<div className="h-48 bg-gray-700 rounded shadow-lg">
									{ index }
								</div>
						</div>
						}) : null
					}
				</div>
					

			</div>
		</div>
		)
	}
}

export default Sidebar;