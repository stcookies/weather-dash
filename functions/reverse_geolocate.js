const axios = require('axios');

exports.handler = (event, context, callback) => {
  const { lat, long } = event.queryStringParameters;
  return axios.get(`https://www.mapquestapi.com/geocoding/v1/reverse?key=${process.env.REACT_APP_MAPQUEST_KEY}&location=${lat}%2C${long}&outFormat=json&thumbMaps=false`)
    .then((response) => {
      return {
        statusCode: 200,
        body: JSON.stringify(response.data)
      }
    })
    .catch((error) => {
      return {
        statusCode: error.response.status,
        body: error.response.statusText
      }
    });
}