import React from 'react';
import WeatherIcon from './WeatherIcon';

class ForecastTile extends React.Component {
  render() {
    return (
      <div className="flex items-center">
        <WeatherIcon icon={ this.props.weatherData.icon } className="h-48 text-white fill-current" />
        <div className="flex flex-col">
          <span className="text-6xl font-semibold leading-none text-white">{ this.props.weatherData.temperatureHigh.toFixed() + '°' }</span>
          <span className="text-xl font-semibold text-white">{ this.props.weatherData.summary }</span>
        </div>
      </div>
    )
  }
}

export default ForecastTile;