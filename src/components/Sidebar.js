import React from 'react';

class Sidebar extends React.Component {
	constructor() {
		super();
		this.state = {
			
		}
	}
	render() {
		return (
		<div className="h-full px-24 pt-16 overflow-y-scroll bg-gray-900 opacity-75">
			<div className="relative flex items-center border-b border-b-2 border-gray-500">
				<input className="z-10 w-full py-1 pl-8 mr-3 text-lg leading-tight text-white bg-transparent border-none appearance-none focus:outline-none" type="text" placeholder="Location" aria-label="Location" />
				<div className="absolute inset-0 flex items-center">
					<svg className="w-6 h-6 text-white fill-current"><path d="M16.32 14.9l5.39 5.4a1 1 0 01-1.42 1.4l-5.38-5.38a8 8 0 111.41-1.41zM10 16a6 6 0 100-12 6 6 0 000 12z" /></svg>
				</div>
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
			<div className="py-12">
				<span className="block pb-3 text-3xl font-semibold text-white">7 Day</span>
				<div class="flex justify-between">
					<span className="block pt-8 text-lg text-white">Sunday</span>
					<span className="block pt-8 text-lg text-white">42&deg;</span>
				</div>
				<div class="flex justify-between">
					<span className="block pt-8 text-lg text-white">Monday</span>
					<span className="block pt-8 text-lg text-white">39&deg;</span>
				</div>
				<div class="flex justify-between">
					<span className="block pt-8 text-lg text-white">Tuesday</span>
					<span className="block pt-8 text-lg text-white">31&deg;</span>
				</div>
				<div class="flex justify-between">
					<span className="block pt-8 text-lg text-white">Wednesday</span>
					<span className="block pt-8 text-lg text-white">51&deg;</span>
				</div>
				<div class="flex justify-between">
					<span className="block pt-8 text-lg text-white">Thursday</span>
					<span className="block pt-8 text-lg text-white">61&deg;</span>
				</div>
				<div class="flex justify-between">
					<span className="block pt-8 text-lg text-white">Friday</span>
					<span className="block pt-8 text-lg text-white">64&deg;</span>
				</div>
				<div class="flex justify-between">
					<span className="block pt-8 text-lg text-white">Saturday</span>
					<span className="block pt-8 text-lg text-white">50&deg;</span>
				</div>
			</div>
		</div>
		)
	}
}

export default Sidebar;