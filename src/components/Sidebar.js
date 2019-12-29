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
			<span className="block pb-3 text-3xl font-semibold text-white">Today</span>
			<div class="border-t border-gray-300">
				<span className="block pt-12 text-lg text-white">Precipitation</span>
				<span className="block pt-6 text-lg text-white">Description</span>
				<span className="block pt-6 text-lg text-white">Humidity</span>
				<span className="block pt-6 text-lg text-white">High / Low</span>
				<span className="block pt-6 text-lg text-white">Wind</span>
			</div>
		</div>)
	}
}

export default Sidebar;