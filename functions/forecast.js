const axios = require('axios');

exports.handler = (event, context, callback) => {
  const { lat, long } = event.queryStringParameters;
  return axios.get(`https://api.darksky.net/forecast/${process.env.REACT_APP_DARKSKY_KEY}/${lat},${long}`)
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