import React from 'react';

class Sidebar extends React.Component {
	constructor() {
		super();
		this.state = {
			
		}
	}
	render() {
		return (
		<div className="h-full px-24 pt-16 bg-gray-900 opacity-75">
			<div className="relative flex items-center border-b border-b-2 border-teal-500">
				<input className="w-full px-2 py-1 mr-3 leading-tight text-white bg-transparent border-none appearance-none focus:outline-none" type="text" placeholder="Cincinnati, OH" aria-label="Location" />
			</div>
			<span className="block pt-8 pb-3 text-3xl font-semibold text-white">Today</span>
			<div className="">
				<div class="flex justify-between">
					<span className="block pt-8 text-lg text-white">Description</span>
					<span className="block pt-8 text-lg text-white">Partly Cloudy</span>
				</div>
				<div class="flex justify-between">
					<span className="block pt-12 text-lg text-white">Precipitation</span>
					<span className="block pt-12 text-lg text-white">62%</span>
				</div>
				<div class="flex justify-between">
					<span className="block pt-12 text-lg text-white">Humidity</span>
					<span className="block pt-12 text-lg text-white">92%</span>
				</div>
				<div class="flex justify-between">
					<span className="block pt-12 text-lg text-white">High / Low</span>
					<span className="block pt-12 text-lg text-white">63&deg; / 42&deg;</span>
				</div>
				<div class="flex justify-between">
					<span className="block pt-12 text-lg text-white">Wind</span>
					<span className="block pt-12 text-lg text-white">S 18 mph</span>
				</div>
			</div>
		</div>
		)
	}
}

export default Sidebar;