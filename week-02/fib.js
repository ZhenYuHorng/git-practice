//請在 Node.js 中實作一個函式 fibonacci(n)，該函式返回第 n 個費波納契數

function fib(n) {
  // TODO: implement fibonacci
　//fib
  if(n > 2){ //費波納契數前兩數字不符合規則，從第三數開始算起
    return fib(n-1) + fib(n-2);
  }
  return 1;
}

console.log(fib(0));
console.log(fib(1));
console.log(fib(5));
console.log(fib(10));