import React from 'react';
import WeatherIcon from './WeatherIcon';
import moment from 'moment-timezone';

class ForecastTile extends React.Component {
  render() {
    return (
      <div className="p-8">
        <div className="flex justify-between pb-5">
          { this.props.daysAway === 1 ? <span className="text-2xl font-semibold text-white">Tomorrow</span> : null }
          <span className="text-xl font-semibold text-white">{ moment().tz(this.props.timezone).add(this.props.daysAway, 'day').format('dddd MMMM D, YYYY')}</span>
        </div>
        <div className="flex items-center">
          <div className="w-3/4">
            <span className="text-xl font-semibold text-white">{ this.props.weatherData.summary }</span>
          </div>
          <div className="w-1/4">
            <div className="flex justify-between">
              <span className="text-xl font-thin text-center text-white uppercase">High</span>
              <span className="text-xl font-thin text-center text-white uppercase">Low</span>
            </div>
            <div className="flex justify-between text-4xl font-semibold text-white">
              <span className="leading-none">{ this.props.weatherData.temperatureHigh.toFixed() + '°' }</span>
              <span className="leading-none">/</span>
              <span className="leading-none">{ this.props.weatherData.temperatureLow.toFixed() + '°' }</span>
            </div>
            <div className="flex justify-between pt-5">
              <span className="text-lg font-thin text-white">Precip</span>
              <span className="text-lg font-thin text-white">{ this.props.weatherData.precipProbability + '%' }</span>
            </div>
            <div className="flex justify-between pt-1">
              <span className="text-lg font-thin text-white">Wind</span>
              <span className="text-lg font-thin text-white">{ this.props.weatherData.windSpeed.toFixed() + ' mph' }</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ForecastTile;