
exports.handler = function(event, context, callback) {
    $.getJSON('https://whateverorigin.herokuapp.com/get?url=https://medium.com/mason-hack-club/latest', function(data){
    console.log(data)
    var url = data.contents.match(/(?<=data-action-value=\s*).*?(?=\s*data-action-index)/gs);
    url = (url[1].split(" ")[0]);
    });
    callback(null, {
    statusCode: 200,
    body: url
    });
}