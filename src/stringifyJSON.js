// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if (typeof obj === 'number') {
    return obj.toString();
  } else if ( typeof obj === 'boolean' ){
    return obj.toString();
  } else if ( obj===null ){
    return "null";
  } else if ( typeof obj === 'string' ){
    return '"'+obj+'"';
  } else if ( Array.isArray(obj) ){
    if ( obj.length===0 ){
      return '[]';
    } else {
      var returnString='[';
      for( var i =0 ; i <obj.length; i++){
        returnString += stringifyJSON(obj[i]);
        if (i < obj.length - 1) {
          returnString += ',';
        }
      }
      return returnString+']';
    }
  } else if (typeof obj ==='object'){
    var returnObj='{';
    for( var key in obj){
      if ( typeof obj[key] === 'function' || obj[key] === undefined ){
      } else {
        returnObj += '"' + key + '":' + stringifyJSON(obj[key]) + ',';
      }
    }
    if (returnObj.length ===1){
      return '{}'; 
    }
    return returnObj.substr(0,returnObj.length-1) + '}';
  }
};