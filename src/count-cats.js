const CustomError = require("../extensions/custom-error");
module.exports = function countCats(backyard) {
    backyard=backyard.flat();
    let count = 0;
    backyard.forEach(function(item, i, arr) {
      let s=String(item);
      if (s[0]==='^' && s[0]===s[1]) {
        count++;
      }
    });
    return count;
    };