let r = document.getElementById('result');

// 할당 연산자

let x = 10;
x += 5;
r.innerHTML = x;

x -= 5;
r.innerHTML = x;

x *= 5;
r.innerHTML = x;

x /= 5;
r.innerHTML = x;

x %= 5;
r.innerHTML = x;

x = 5;
x **= 5;
r.innerHTML = x;

// 비교 연산자
const t = 5;
const y = 5;

// equal to
console.log(t == y);

// equal value and equal type
console.log(t === y);

// not equal
console.log(t != y);

// not equal value or not equal type
console.log(t !== y);

// greater than
console.log(t > y);

// less than
console.log(t < y);

// greater than or equal to
console.log(t >= y);

// less than or equal to
console.log(t <= y);