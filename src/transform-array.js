// const CustomError = require("../extensions/custom-error");

// module.exports = function transform(arr) {
//      let arrNew=[];
//      for (i=0; i<arr.length; i++) {
// switch (arr[i]) {
//     case "--discard-next": {
//     i++;
//     break;
// }
// case "--discard-prev": {
//     arrNew.pop();
//     break;
// }
// case "--double-next": {
//     arrNew.push(arr[i+1]*2);
//     i++;
//     break;
// }
// case "--double-prev": {
//     arrNew.pop();
//     arrNew.push(arr[i-1]*2);
//     break;
// }
// default: arrNew.push(arr[i]);
// }
//      };
//      console.log(arrNew);
//      return arrNew;
// };
