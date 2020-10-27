const CustomError = require("../extensions/custom-error");

 module.exports = function getSeason(date) {
  console.log(date);
  if (String(date)==="Invalid Date"){
    console.log('ошибка');
    throw Error;
  }
  let month = date.getMonth();
  if (month===11 || month===00 || month===01) {
    console.log('winter');
    return 'winter';
  }
  if (month===02 || month===03 || month===04) {
    console.log('spring');
    return 'spring';
  }
  if (month===05 || month===06 || month===07) {
    console.log('summer');
    return 'summer';
  }
  if (month===08 || month===09 || month===10) {
    console.log('autumn');
    return 'autumn';
  }
  // console.log(month);

  // console.log(date);
};
// let date = new Date("aaa", 01, 01, 18, 36, 41, 841);
// getSeason(date);

// spring, summer, autumn (fall), .