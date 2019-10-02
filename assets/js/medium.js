function mediumArticle(){
    var iframe2 = document.getElementById("iframe")
    console.log(repr(iframe2))
}

function repr(obj) {
    if(obj == null || typeof obj === 'string' || typeof obj === 'number') {return String(obj)};
    if(obj.length) {return '[' + Array.prototype.map.call(obj, repr).join(', ') + ']'};
    if(obj instanceof HTMLElement) {return '<' + obj.nodeName.toLowerCase() + '>'};
    if(obj instanceof Text) {return '"' + obj.nodeValue + '"'};
    if(obj.toString) {return obj.toString()};

    return String(obj);
    }		


        /*
        $('iframe').css({
            'display': 'none'
        })
        */