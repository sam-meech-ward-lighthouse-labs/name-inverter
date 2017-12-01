
// Works with 2 or less names
function invertName(name) {
  if (name === '') {
    return '';
  }
  var names = name.split(' ');
  if (names.length === 1) {
    return name;
  }
  var invertedName = names[1] + ", " + names[0];
  return invertedName;
}

module.exports = invertName;