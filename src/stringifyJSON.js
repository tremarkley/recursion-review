// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  console.log(obj);
  // your code goes here
  var objType = typeof obj; 
  if (objType === 'number' || obj === null || objType === 'boolean') {
    return '' + obj;
  } else if (objType === 'string') {
    return '\"' + obj + '\"';
  } else if (Array.isArray(obj)) {
    let resArray = '[';
    for (let i = 0; i < obj.length; i++) {
      resArray += stringifyJSON(obj[i]);
      if (i < obj.length - 1) {
        resArray += ',';
      }
    }
    return resArray + ']'; 
  } else if (objType === 'object') {
    let resObject = '{';
    let notEmpty = false;
    for (let key in obj) {
      if (obj[key] !== undefined && typeof obj[key] !== 'function') {
        notEmpty = true;
        resObject += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',';
      }
    }
    if (notEmpty) {
      resObject = resObject.slice(0, resObject.length - 1);
    }
    return resObject + '}';
  }
};
