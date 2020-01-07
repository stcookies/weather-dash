import React from 'react';
import { ReactComponent as ClearDay } from '../assets/icons/clear-day.svg';
import { ReactComponent as ClearNight } from '../assets/icons/clear-night.svg';
import { ReactComponent as Cloudy } from '../assets/icons/cloudy.svg';
import { ReactComponent as Fog } from '../assets/icons/fog.svg';
import { ReactComponent as Hail } from '../assets/icons/hail.svg';
import { ReactComponent as PartlyCloudyDay } from '../assets/icons/partly-cloudy-day.svg';
import { ReactComponent as PartlyCloudyNight } from '../assets/icons/partly-cloudy-night.svg';
import { ReactComponent as Rain } from '../assets/icons/rain.svg';
import { ReactComponent as Sleet } from '../assets/icons/sleet.svg';
import { ReactComponent as Snow } from '../assets/icons/snow.svg';
import { ReactComponent as Tornado } from '../assets/icons/tornado.svg';
import { ReactComponent as Wind } from '../assets/icons/wind.svg';

class WeatherIcon extends React.Component {
  components = {
    'clear-day': ClearDay,
    'clear-night': ClearNight,
    'cloudy': Cloudy,
    'fog': Fog,
    'hail': Hail,
    'partly-cloudy-day': PartlyCloudyDay,
    'partly-cloudy-night': PartlyCloudyNight,
    'rain': Rain,
    'sleet': Sleet,
    'snow': Snow,
    'tornado': Tornado,
    'wind': Wind
  }
  render() {
    const IconComponent = this.components[this.props.icon];
    return (
      <IconComponent className={ this.props.className } />
    )
  }
}

export default WeatherIcon;