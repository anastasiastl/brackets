module.exports = function check(str, bracketsConfig) {
  var arr = [];
  for (var i=0; i<str.length; i++) {
    var pos = -1;
    for (var j=0; j<bracketsConfig.length; j++) {
      if (str[i] === bracketsConfig[j][1]) {
        pos = j;
      }
    }
    if (pos<0) {
      arr.push(str[i]);
    } else {
      if (arr[arr.length-1] === bracketsConfig[pos][0]) {
        arr.pop();
      } else {
        if (str[i] === bracketsConfig[pos][0]) {
          arr.push(str[i]);
        } else {
          return false;
        }
      }
    }
  }
  return arr.length === 0;
}
