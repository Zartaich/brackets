module.exports = function check(str, bracketsConfig) {

  const arr = str.split('');

  if (arr.length % 2 !== 0) {
    return false;
  }

  const stack = [];

  for (let i = 0; arr.length > i; i++) {
    for (let y = 0; bracketsConfig.length > y; y++) {
      if (bracketsConfig[y][1] === arr[i] && bracketsConfig[y][0] === stack[stack.length - 1]) {
        stack.pop();
      } else if (arr[i] === bracketsConfig[y][0]) {
        stack.push(arr[i]);
      }
    }
  }

  return stack.length === 0;
}

