const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  // console.log('---------------');
  // console.log(arr);
  // console.log('---------------');
  if (!Array.isArray(arr)) {
    throw Error;
    }
    let arrNew=[];
    for (i=0; i<arr.length; i++) {
    switch (arr[i]) {
    case "--discard-next": {
    if (i<arr.length-1) {
    i++;
    }
    break;
    }
    case "--discard-prev": {
      if (arr[i-2]==="--discard-next"){
        break;
      }
    if (i>0) {
    arrNew.pop();
    }
    break;
  }
    case "--double-next": {
    if (i<arr.length-1) {
    arrNew.push(arr[i+1]);
    }
    break;
    }
    case "--double-prev": {
      if (arr[i-2]==="--discard-next"){
        break;
      }
    if (i>0) {
    arrNew.push(arr[i-1]);
    }
    break;
    }
    default: arrNew.push(arr[i]);
    }
    }
    console.log(arrNew);
    return arrNew;
    };

    //transform([1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5],);