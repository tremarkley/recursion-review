// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // your code goes here
  // let resultObj;

  if (json[0] === '[') {
    let resultArr = [];
    let commaIndex = 1;
    for (let i = 1; i < json.length; i++) {
      let curSection;
      if (json[i] === '[') {
        // resultArr.push(parseJSON(json.slice(i)));

        for (let j = i; j < json.length; j++) {
          if (json[j] === ']') {
            resultArr.push(parseJSON(json.slice(i, j + 1)));
            i = j;
            break;
          }
        }
      

      } else if (json[i] === ',' || json[i] === ']') {
        curSection = json.slice(commaIndex, i);

        if (curSection[0] === '"' && curSection[curSection.length - 1] === '"') {
          resultArr.push(curSection.slice(1, curSection.length - 1));
        } else if (+curSection) {
          resultArr.push(+curSection);
        } else if (curSection === 'null') {
          resultArr.push(null);
        } else if (curSection === 'true') {
          resultArr.push(true);
        } else if (curSection === 'false') {
          resultArr.push(false);

        } if (json[i] === ']') {
          return resultArr;
        }
        commaIndex = i + 1;
      } 
    }
  }
};
