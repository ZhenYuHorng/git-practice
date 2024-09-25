//請在 Node.js 中實作一個函式 fibonacci(n)，該函式返回第 n 個費波納契數

// 由於費波納契數是前兩數的相加來計算下一個數字，重複解決同樣的加法問題，符合遞迴概念
function fib(n) {
  // 前兩個數字還不能開始相加
  if(n === 0){
    return 0;
  }else if(n === 1){
    return 1;
  }
 //費波納契數前兩數字不符合規則，從第三數開始算起
  return fib(n-1) + fib(n-2);
}

// 也可以透過for迴圈進行預算，不斷加總直到要求的數量就停止
function fib2(n) {
  // 前兩個數字還不能開始相加
  if(n === 0){
    return 0;
  }else if(n === 1){
    return 1;
  }
  // 第三數開始符合費波納契數
  let fir = 0;
  let sec = 1;
  let total;
  for(let i = 2; i <= n; i++){
    total = fir + sec;
    fir = sec; // 為下一個費波納契數準備
    sec = total;
  }
  return total;
}

console.log("用遞迴時實作");
console.log(fib(0));
console.log(fib(1));
console.log(fib(5));
console.log(fib(10));

console.log("用迴圈時實作");
console.log(fib2(0));
console.log(fib2(1));
console.log(fib2(5));
console.log(fib2(10));