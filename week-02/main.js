// main.js
// TODO 以 Module 的方式匯入，例如:
import Stack from './stack.js';
//需要有一個json檔告訴Node.js程式碼是用ESM模組

let stack = new Stack();
stack.print();

stack.push(5);
stack.push(8);
stack.print();

// TODO: 應該還要做哪些測試，以驗證自己開發的 stack 是沒有問題的？
stack.pop(); //測試是否可以pop出最上面element
stack.peek(); //pop之後的element是否正確
stack.clear(); 
stack.isEmpty();//檢查是否清空成功