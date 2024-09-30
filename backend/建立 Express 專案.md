# 建立 Express 專案

1. `npm init`
2. `npm install express` 
    1. 觀察 package.json 的變化
    2. 觀察 node_modules 裡面有什麼
3. 建立 app.js 檔案
    
    ```jsx
    const express = require('express');
    const app = express();
    const port = 3000;
    
    app.get('/', (req, res) => {
      res.send('Hello World!');
    })
    
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    })
    ```
    
4. `node app.js` 啟動 server
5. 以瀏覽器開啟 [http://localhost:3000/](http://localhost:3000/) 或是透過指令 `curl http://localhost:3000/` 來測試是否有建置成功
6. 上述程式，把要監聽的 port number 寫死在程式碼中，這是一種比較不好的做法，請研究「環境變數」，找找看要怎麼透過環境變數的設定來修改要監聽的 port number（而不是直接去修改 app.js 這個檔案）
7. 注意哪些檔案應該要被放上 github repo 來？ 

---

### 一、`npm init`

藉由輸入欄位資訊後，使用這個指令可以幫我們創建 package.json 的檔案，如果覺得麻煩，使用 `npm init -y` 可以直接建立一個空白的package.json 的檔案

### 二、`npm install express`

1. package.json 的變化
    
    ![image.png](/asset/img/image.png)
    
    分別新增node_moudles資料夾和package-lock.json檔案，同時package.json的內容也產生變化，以下逐一說明：
    
    - node_moudles資料夾
        
        npm 除了套件管理，同時也維護著一個大型的在線資料庫，存儲著眾多的 JavaScript 套件。使用 `npm install` 命令時，NPM 會在其在線資料庫中搜索你要安裝的套件，也就是安裝的套件實際上是從 npm 的在線資料庫下載的
        
    - package.json變化
        
        更新 package.json 的 dependencies
        
        ![image.png](/asset/img/image%201.png)
        
    - package-lock.json檔案
        
        package-lock.json的檔案可以藉由紀錄每次開發版本的dependencies來確保專案的一致性，因為若是其他使用該module的人下載到其他本版的 dependencies，專案很可能會無法進行。即便 package.json 檔案中有定義版本範圍，提供開發者靈活使用，但用 package-lock.json，可以確保 dependencies 在每次安裝時都會是相同內容，不會受環境所影響。
        
2. node_modules 內容
    
    package.json 雖然只有新增 express 這個套件，但卻安裝了非常多函式庫，這是因為 express 也是用 node.js 開發，所以也需要靠 package.json 管理他的 dependencies 。
    
    ![image.png](/asset/img/image%202.png)
    

### 三、port number 要如何撰寫

把監聽的 port number 寫死在程式碼中並不是一種很好的做法，因為在不同的部屬環境中可能需要不同的 port number ，例如，在 Heroku 等雲平台上，應用程式必須監聽由平台動態分配的端口號， 或是更換生產環境的話就必須一直修改程式碼，並不利於管理與團隊協作。解決方法有二：

- Step 1、使用**環境變數**
    
    在 app.js 的檔案中加上這個變更：
    
    ```jsx
    const port = process.env.PORT || 3000;
    ```
    
    `process.env.PORT` 會讀取名為 `PORT` 的環境變數，如果這個環境變數不存在或無法使用，就會使用 預設值 3000。
    
- Step 2、使用**配置文件**
    
    接著我們要用 .env 檔案來管理環境變數，首先先安裝 `dotenv` 套件
    
    ```bash
    npm install dotenv
    ```
    
    在專案根目錄下建立一個 `process.env` 文件，並在其中設定 `PORT` 值：
    
    ```bash
    PORT = 4000
    ```
    
    然後在 app.js 最前面加入 dotenv 以讀取環境變數
    
    ```jsx
    require('dotenv').config();  
    ```
    
    就可以順利改變port number了
    
    ![image.png](/asset/img/image%203.png)
    

### 四、上傳 git hub 的檔案

在 package.json 裡記錄了所有專案需要的函式庫，若是想把專案移轉到其他環境（電腦），之後只需要有原始的程式碼加上 package.json ，執行 `npm install` 時就會自動把 package.json 裡面缺的 dependencies 安裝完成。因此，上傳到git hub的檔案中不需要含有   node_modules 的資料夾。另外不需要上傳的還有 .evn 的檔案，因為這類的檔案中通常會有敏感資訊，像是密碼等等。

### 五、Reference

https://ithelp.ithome.com.tw/m/articles/10241057

https://ithelp.ithome.com.tw/articles/10191783

https://coding-ontheway.coderbridge.io/2022/02/16/nodejs-dotenv-environment-variables/

https://node.dev.org.tw/en/learn/command-line/how-to-read-environment-variables-from-nodejs