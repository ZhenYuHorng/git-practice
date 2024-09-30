# readme

**Q. package.json 中的 dependencies 與 devDependencies 分別是什麼**

- `dependencies`：在**專案運行時**需要的套件
- `devDependencies`： 在**開發環境**需要用到的套件，像是測試框架等

**Q. package.json 中的 scripts 這個區塊怎麼用？**

- `scripts` 區塊用來定義可以執行的命令，包含測試報錯等等
- scripts 可以用來定義複雜的指定，在專案越來越龐大時減少開發的時間，包含測試報錯等等

**Q. Port number 要怎麼以環境變數來設定？**

- 可以使用 `process.env.PORT` 來取得環境變數的 port number
- 然後建立`process.env` 寫入 port number

**Q. 關於哪些檔案應該要被放上 github repo 這個問題，描述看看為什麼你選擇上傳某些檔案、選擇不上傳某些檔案，決策的要素是什麼？**

- 必須上傳的有包含應用程式的源代碼、readme.md、環境配置文件
- 不該上傳有兩個決定要素，第一是會package.json會自動下載的檔案，第二是含有隱私資訊的內容。（express的檔案有詳述）

**Q. 範例程式中用 require，但上週的 Stack 是用 import/export，這兩種分別是 JavaScript 引用模組的兩種方式: CJS vs ESM，這兩者分別怎麼用？**

- **CJS (CommonJS)**
    - 源於 Node.js 的伺服器端開發，但後來被改編用於前端
    - 用 `require` 來導入模組，並使用 `module.exports` 或 `exports` 來定義導出的內容
    
    ```jsx
    var math = require('./math.js');
    console.log(math.add(2, 3)); // 輸出：5
    
    ```
    
- **ESM (ECMAScript Modules)**
    - 在 ECMAScript 6 (ES6) 中引入
    - 使用 `import` 和 `export` 關鍵字來定義和導入模組
    
    ```jsx
    import { add } from './math.js';
    console.log(add(2, 3)); // 輸出：5
    
    ```