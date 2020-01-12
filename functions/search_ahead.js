const axios = require('axios');

exports.handler = (event, context, callback) => {
  const { location } = event.queryStringParameters;
  return axios.get(`http://www.mapquestapi.com/search/v3/prediction?key=${process.env.REACT_APP_MAPQUEST_KEY}&q=${location}&collection=adminArea&limit=5`)
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