// main.js
// TODO 以 Module 的方式匯入，例如:
import Stack from './stack.js';
// 需要有一個json檔告訴Node.js程式碼是用ESM模組
// 可以用npm init -y的指令創建package檔案
// 打開package.json贈確認有"type": "module"
// (之前是直接手動創建package.json，只寫出"type": "module"，覺得不夠完整故修正)

let stack = new Stack();
stack.print();

stack.push(5);
stack.push(8);
stack.print();

// TODO: 應該還要做哪些測試，以驗證自己開發的 stack 是沒有問題的？
console.log(stack.pop()); //測試是否可以pop出最上面element
console.log(stack.peek()); //pop之後的element是否正確
console.log(stack.clear());//stack內沒有元素的話可以顯示錯誤
console.log(stack.isEmpty());//檢查是否清空成功
console.log(stack.pop());//stack內沒有元素的話可以顯示錯誤
console.log(stack.peek());//stack內沒有元素的話可以顯示錯誤