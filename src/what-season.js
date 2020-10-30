const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  let toString = {}.toString;
  if (date==null) {
    return 'Unable to determine the time of year!';
  }
   if (toString.call(date)!=='[object Date]'){
    
     throw Error;
    }
  let month = date.getMonth();
  if (month===11 || month===00 || month===01) {
   
    return 'winter';
  }
  if (month===02 || month===03 || month===04) {

    return 'spring';
  }
  if (month===05 || month===06 || month===07) {

    return 'summer';
  }
  if (month===08 || month===09 || month===10) {

    return 'autumn';
  }
  // console.log(month);

  // console.log(date);
};
//  let date = new Date("aaa", 01, 01, 18, 36, 41, 841);
// getSeason(date);

// spring, summer, autumn (fall), .