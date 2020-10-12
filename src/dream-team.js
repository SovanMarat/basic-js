const CustomError = require("../extensions/custom-error");
module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
    }
  if (members.length === 0) {
    return false;
  }
  let nameTeam = members.map(function (item) {
    let typeItem = typeof (item);
    if (typeItem === 'string') {
      item = item.replace(/\s/g, '');
      return item[0].toUpperCase();
    }
  });
  nameTeam=nameTeam.sort();
  nameTeam = nameTeam.join('');
  return nameTeam;
}