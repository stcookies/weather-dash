import React from 'react';
import WeatherIcon from './WeatherIcon';
import moment from 'moment-timezone';

class ForecastTile extends React.Component {
  render() {
    return (
      <div className="p-8">
        { 
        this.props.daysAway === 1 ? 
          <div>
            <div className="flex flex-wrap justify-between pb-5">
              <span className="text-xl font-semibold text-white">Tomorrow</span>
              <span className="text-xl font-semibold text-white">{ moment().tz(this.props.timezone).add(this.props.daysAway, 'day').format('dddd MMMM D, YYYY')}</span>
            </div>
            <div className="flex items-center">
              <div className="flex items-center w-3/4">
                <WeatherIcon icon={ this.props.weatherData.icon } className="h-16 text-white fill-current" />
                <span className="block px-8 text-xl font-semibold text-white">{ this.props.weatherData.summary }</span>
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
          :
          <div>
            <div className="flex flex-col justify-center">
              <span className="text-lg font-semibold text-center text-white break-words whitespace-pre">{ moment().tz(this.props.timezone).add(this.props.daysAway, 'day').format('dddd[\n]MMMM D, YYYY')}</span>
              <WeatherIcon icon={ this.props.weatherData.icon } className="h-12 my-5 text-white fill-current" />
              <div className="flex justify-center">
                  <span className="pr-5 text-lg font-thin text-center text-white uppercase">High</span>
                  <span className="pl-5 text-lg font-thin text-center text-white uppercase">Low</span>
                </div>
                <div className="flex justify-center text-3xl font-semibold text-white">
                  <span className="leading-none">{ this.props.weatherData.temperatureHigh.toFixed() + '°' }</span>
                  <span className="px-2 leading-none">/</span>
                  <span className="leading-none">{ this.props.weatherData.temperatureLow.toFixed() + '°' }</span>
                </div>
            </div>
          </div>
        }
      </div>
    )
  }
}

export default ForecastTile;