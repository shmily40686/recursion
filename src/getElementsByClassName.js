// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  var arr = [];
  var nodes = function (element) {
    if (element.className !== undefined) {
      var classes = element.className.split(" ");
      if ( classes.indexOf(className) > -1 ) {
        arr.push(element);
      }
    }
    for ( var i = 0; i < element.childNodes.length; i++ ) {
      nodes(element.childNodes[i]);
    }
  };
  nodes(document.body);
  return arr;
};
