const axios = require('axios');

exports.handler = (event, context, callback) => {
  const { location } = event.queryStringParameters;
  return axios.get(`https://www.mapquestapi.com/geocoding/v1/address?key=${process.env.REACT_APP_MAPQUEST_KEY}&inFormat=kvp&outFormat=json&location=${location}&thumbMaps=false`)
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