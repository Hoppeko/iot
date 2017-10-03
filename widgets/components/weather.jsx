'use strict';

const React = require('react');


const toQueryString = (obj) => {
  let parts = [];
  for (let i in obj) {
      if (obj.hasOwnProperty(i)) {
          parts.push(`${encodeURIComponent(i)}=${encodeURIComponent(obj[i])}`);
      }
  }
  return parts.join('&');
};

const Weather = React.createClass({
  getInitialState() {
    return {weather: null};
  },

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(this.pollWeather);
  },

  pollWeather(location) {
    let lat = location.coords.latitude;
    let long = location.coords.longitude;
    let url = 'https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?';
    let params = {
      lat: location.coords.latitude,
      lon: location.coords.longitude,
      units: 'imperial'
    };
    url += toQueryString(params);
    // This is our API key; please use your own!
    const apiKey = 'f816d7f39052e3a98b21952097a43076';
    url += `&APPID=${apiKey}`;

    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = () => {
      //ready state of DONE means this is complete
      if (xmlhttp.status === 200 && xmlhttp.readyState === XMLHttpRequest.DONE) {
        const data = JSON.parse(xmlhttp.responseText);
        this.setState({weather: data});
      }
    };

    xmlhttp.open('GET', url, true);
    xmlhttp.send();
  },

  render() {
    let content = <div></div>;

    if (this.state.weather) {
      let temp = this.state.weather.main.temp;
      content = <div>
                  <p>San Francisco</p>
                  <p>{temp.toFixed(1)} degrees</p>
                </div>;
    } else {
      content = <div className='loading'>loading weather...</div>;
    }
    return (
      <div>
        <h1>Weather</h1>
        <div className='weather'>
          {content}
        </div>
      </div>
    );
  }
});

module.exports = Weather;
