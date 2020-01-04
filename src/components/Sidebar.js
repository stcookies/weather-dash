import React from 'react';

class Sidebar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			location: ''
		}
	}
	componentWillReceiveProps(newProps) {
		this.setState({ location: newProps.location });
	}
	changeLocation = (e) => {
		this.setState({ location: e.target.value });
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
			<span onClick={ () => this.props.changeLocation(this.state.location) } className="block pt-8 pb-3 text-3xl font-semibold text-white">Today</span>
			<div>
				<div className="flex justify-between">
					<span className="block pt-8 text-lg text-white">Description</span>
					<span className="block pt-8 text-lg text-white">{ this.props.weatherData ? this.props.weatherData.daily.data[0].summary : '...' }</span>
				</div>
				<div className="flex justify-between">
					<span className="block pt-12 text-lg text-white">Precipitation</span>
					<span className="block pt-12 text-lg text-white">{ this.props.weatherData ? this.props.weatherData.daily.data[0].precipProbability + '%' : '...' }</span>
				</div>
				<div className="flex justify-between">
					<span className="block pt-12 text-lg text-white">Humidity</span>
					<span className="block pt-12 text-lg text-white">{ this.props.weatherData ? this.props.weatherData.daily.data[0].humidity : '...' }</span>
				</div>
				<div className="flex justify-between">
					<span className="block pt-12 text-lg text-white">High / Low</span>
					<span className="block pt-12 text-lg text-white">{ this.props.weatherData ? this.props.weatherData.daily.data[0].temperatureHigh.toFixed() + '° / ' + this.props.weatherData.daily.data[0].temperatureLow.toFixed() + '°'  : '...' }</span>
				</div>
				<div className="flex justify-between">
					<span className="block pt-12 text-lg text-white">Wind</span>
					<span className="block pt-12 text-lg text-white">{ this.props.weatherData ? this.props.weatherData.daily.data[0].windSpeed.toFixed() + ' mph' : '...' }</span>
				</div>
			</div>
			<div className="py-12">
				<span className="block pb-3 text-3xl font-semibold text-white">7 Day</span>
				<div className="h-48 bg-gray-700 rounded">

				</div>
				<div className="flex pt-5">
					<div className="w-1/3 h-48 bg-gray-700 rounded"></div>
					<div className="w-1/3 h-48 mx-4 bg-gray-700 rounded"></div>
					<div className="w-1/3 h-48 bg-gray-700 rounded"></div>
				</div>
				<div className="flex pt-3">
					<div className="w-1/3 h-48 bg-gray-700 rounded"></div>
					<div className="w-1/3 h-48 mx-4 bg-gray-700 rounded"></div>
					<div className="w-1/3 h-48 bg-gray-700 rounded"></div>
				</div>
			</div>
		</div>
		)
	}
}

export default Sidebar;