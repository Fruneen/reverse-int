module.exports = function reverse (n) {
  if (n < 0) n = -n;
  let number = 0;
  for (i = n; i != 0; i = Math.floor(i / 10)) {
      number = number * 10 + i%10; 
  }
  return number;
}