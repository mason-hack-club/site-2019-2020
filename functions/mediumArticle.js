exports.handler = function (event, context, callback) {
    const url = `https://www.medium.com/mason-hack-club/latest`;

    request.open('GET', url);
    request.responseType = 'text';

    request.onload = function() {
        callback(null, {
            statusCode: 200,
            body: JSON.stringify(request.response)
          });
    };
}