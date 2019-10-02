$.getJSON('http://www.whateverorigin.org/get?url=' + encodeURIComponent('https://medium.com/mason-hack-club/latest') + '&callback=?', function(data){
    var url = data.contents.match(/(?<=data-action-value=\s*).*?(?=\s*data-action-index)/gs);
    url = (url[1].split(" ")[0]);
    console.log("<iframe src=" + url + " frameborder='0'></iframe>")
    document.getElementById('iframe').innerHTML = "<iframe src=" + url + " frameborder='0'></iframe>"
});