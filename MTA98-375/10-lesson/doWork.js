onmessage = function(event) {   
    var info = event.data; 
    var result = 'Hello ' + info + ' everywhere';   postMessage(result); 
};