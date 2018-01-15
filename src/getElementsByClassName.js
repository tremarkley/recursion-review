// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  let resArray = [];
  
  var innerFunction = function(element) {
    console.log(element);
    for (let i = 0; i < element.children.length; i++) {
      let currentElement = element.children[i];
      if (currentElement.className.indexOf(className) !== -1) {
        resArray.push(currentElement);  
      }
      innerFunction(currentElement);
    }
  };

  innerFunction(this.document);
  return resArray;
};
