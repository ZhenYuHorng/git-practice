# Callback 練習

這邊使用 **Callback function** 來解決順序性任務的問題，使用 **setTimeout** 做搭配，好處是其他的函式不會因為需要等待而影響執行的時間。

```jsx
function doJob(job, time, cb) {
  setTimeout(() => {
    // 只有在這裡，才能知道這個非同步的 setTimeout 已經做完事情了
    let now = new Date();
    cb(`完成工作 ${job} at ${now.toISOString()}`);
  }, time);
}

// 刷牙 1sec -> 吃早餐 3 sec -> 寫功課 1sec -> 吃午餐 2sec
let now = new Date();
console.log(`開始工作 at ${now.toISOString()}`);
//　Callback function，讓需求按程序完成
doJob('刷牙', 1000, function (data) {
  console.log(data);
  doJob('吃早餐', 3000, function (data) {
    console.log(data);
    doJob('寫功課', 1000, function (data) {
      console.log(data);
      doJob('吃午餐', 2000, function (data) {
        console.log(data);
      });
    });
  });
});

```

然而這種寫法會產生 callback hell ，callback 不斷增加的話會造成程式碼愈加複雜，可以使用 `Promise` 或 `async/await`，並讓可讀性變好。（待補）

### Reference

https://medium.com/appxtech/什麼是callback函式-callback-function-3a0a972d5f82