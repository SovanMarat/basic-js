const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  console.log('---------------------');
  console.log(sampleActivity);
  console.log('---------------------');
  if (sampleActivity>0 && sampleActivity<=MODERN_ACTIVITY && typeof(sampleActivity)==='string'){
return (Math.ceil(Math.log2(MODERN_ACTIVITY/sampleActivity)/(0.693/HALF_LIFE_PERIOD)));
  }
 return false
};
