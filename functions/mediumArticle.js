const axios = require('axios');


exports.handler = function (event, context, callback) {
  const url = `https://www.medium.com/mason-hack-club/latest`;
  
  axios.get(url)
    .then(json => {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(json.data)
      });
    })
    .catch(ex => callback(ex));
}