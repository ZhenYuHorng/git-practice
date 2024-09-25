// stack.js
// 完成以下 TODO 的部分，並且以 Module 的方式匯出 (ESM)
export default class Stack {
	// TODO: # 有特別的意思嗎？請以註解回覆。
  //在物件導向中，表示該術性只能在class中內部存取
  #items;

  constructor() {
    this.#items = [];
  }

  // 在 stack 頂部加入元素i
  push(element) {
		// TODO
    this.#items.push(element); 
  }

  // 移除並回傳 stack 頂部的元素
  pop() {
		// TODO
    return this.#items.pop(); // 只回傳，不印出
  }

  // 回傳 stack 頂部的元素，但不移除它
  peek() {
    // TODO
    return this.#items[this.#items.length - 1]; // 只回傳，不印出
  }

  // 檢查 stack 是否為空
  isEmpty() {
    // TODO
    return this.#items.length === 0; // 只回傳，不印出
  }

  // 回傳 stack 中元素的個數
  size() {
    // TODO
    return this.#items.length; // 只回傳，不印出
  }

  // 清空 stack
  clear() {
    // TODO
    this.#items = [];
  }

  // 印出 stack 內容
  print() {
    // TODO
    console.log(this.#items.toString());
  }
}