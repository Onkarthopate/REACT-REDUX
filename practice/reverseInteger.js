function reverseInteger(num) {

  let isNegative = num < 0;
  num = Math.abs(num);
  let rev = 0;

  while (num > 0) {
    let lastDigit = num % 10;
    rev = rev * 10 + lastDigit;
    num = Math.floor(num / 10);
  }
  if (isNegative) {
    rev = -rev;
  }
  return rev;
}

reverseInteger(-123)