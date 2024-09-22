// stack.js
// 完成以下 TODO 的部分，並且以 Module 的方式匯出 (ESM)
export default class Stack {
	// TODO: # 有特別的意思嗎？請以註解回覆。
  //在物件導向中，表示該類型只能內部存取
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
    return console.log(this.#items.pop());
  }

  // 回傳 stack 頂部的元素，但不移除它
  peek() {
    // TODO
    return console.log(this.#items[this.#items.length - 1]);
  }

  // 檢查 stack 是否為空
  isEmpty() {
    // TODO
    return console.log(this.#items.length === 0);
  }

  // 回傳 stack 中元素的個數
  size() {
    // TODO
    return console.log(this.#items.length);
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