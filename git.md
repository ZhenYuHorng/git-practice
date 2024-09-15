# git

當需多人協作或是監督專案時，Git會是你的好幫手！Git是分散式版本控制系統，與傳統集中式版本控制系統不同的是，分散式的版本控制系統允許每個開發者都有一個完整的開發紀錄，其中包括所有歷史紀錄，開發者可以在地端進行版本控制操作，或是與遠端伺服器同步，不但方便追蹤紀錄，也可以進行多版本開發！

使用Git進行版本控制的步驟大約如下：

1. 需要在建立**工作目錄**(mkdir)與**版本庫**(git init)
2. 在工作目錄中操作檔案，EX: 建立目錄、建立檔案、修改檔案、刪除檔案、... 
3. 當開發到一個階段時，提交一個版本到git的**儲存庫**裡，前提是必須先更新**索引**狀態(git add)
4. 依照**索引**狀態，git會把新的版本上傳到**儲存庫**(git commit)
5. 提交更新時，會需要進行commit，才會把版本的資訊寫到「物件儲存區」當中

要注意的是撰寫it commit需要遵循一定的風格，良好的 commit message 有助於專案維護以及成員間的溝通。撰寫的核心內容是「Why」、「What」及「How」，讓他人更容易釐清修改的邏輯及目的。一個 Commit Message 主要由 Header + Body + Footer 組成：

- **Head**：簡單明瞭的標題
    - type：commit 的類別
        - 如：feat, fix, docs, style, refactor, test, chore
    - subject：commit 的簡短描述
        - 最多 50 字
        - 讓 Commit 單一化，一次只更動一個主題
- **Body**：本次 Commit 的詳細描述
    - 寫出What & Why & How
    - 可以分行但每行不超過72字
- **Footer** ：填寫任務編號
    - EX：issue #1246

一個符合風格的範例如下：

```jsx
feat: 新增使用者註冊功能

為了提升系統的完整性，使用者可以自行註冊帳號，以減少負擔
現在使用者可以通過表單進行註冊，我們新增了以下功能：
- 驗證使用者輸入的電子郵件格式
- 密碼需要至少8個字符，且包含字母和數字
- 註冊成功後會發送確認信件
實踐方式為新增 `/api/v1/register` API 路徑，接收註冊請求並處理輸入驗證
- 使用者資料驗證通過後，將數據儲存到資料庫，並觸發確認信件的發送程序

issue #860514
```

而不同的指令，會在.git資料夾新增不同檔案，如下：

| git init | 創建 `.git` 資料夾，包含`objects` 等的資料夾 |
| --- | --- |
| git add | 將檔案加入索引，準備變成更新，git會創建或更新 `.git/index` 文件。 |
| git commit | 當你提交 commit 時，git才會把版本資訊寫入到「物件儲存區」當中，儲到 `.git/objects` 資料夾中。 |

這邊提到了git的重要資料結構 —「物件」

- **物件（object）**：git 使用物件來保存專案中的所有檔案和每次提交的歷史記錄。每個版本的文件內容、目錄結構和提交歷史都會以物件的形式儲存在git的資料庫中
    - **blob 物件**：blob只儲存檔案的內容，沒有包含檔名或其他檔案結構資訊，而它的名稱是由檔案內容經過雜湊運算後產生的唯一ID。由於單獨存在的blob僅能代表檔案的內容，而無法提供檔案在專案中的位置或關聯資訊，所以對版本控制沒又幫助，因為在版本控制中還需要知道檔案的位置、名稱及其與其他檔案的關係，這些資訊由tree和commit物件來管理。
    - **tree 物件**：在git中，tree主要負責記錄專案的結構，這類的物件會儲存一個特定目錄（資料夾）下所有的檔案和子目錄的資訊，可以把tree想成資料夾，tree下面會有blod（檔案）或是tree（其他資料夾）。
    - **commit 物件**：是用來記錄每次提交的版本狀態，裡面會包含tree物件紀錄該次提交包含哪些檔案和資料夾、提交的時間以及提交的描述，若不是第一次提交，還會有父commit來建立版本歷史鍵。每個commit物件也會有一個SHA1雜湊運算後產生的hash id，這個 id 唯一標識了該commit。
    

git還提供另一個方便我們進行並行開發的功能 — **分支**（branch）。使用branch意味著你可以從開發主線上分離開來，然後在不影響主線的情況下繼續工作。branch是一個有名字的指針，指向特定的commit。git commit 命令用於在當前分支上創建新的提交，從而推進分支的發展。那麼，我們怎麼知道自己現在在哪個分支工作呢？這時候HEAD可以幫助我們釐清現在所在的分支，並指向該branch最新的commit。

### Reference

- [https://github.com/doggy8088/Learn-Git-in-30-days/blob/master/zh-tw/05.md](https://github.com/doggy8088/Learn-Git-in-30-days/blob/master/zh-tw/05.md)
- [https://wadehuanglearning.blogspot.com/2019/05/commit-commit-commit-why-what-commit.html](https://wadehuanglearning.blogspot.com/2019/05/commit-commit-commit-why-what-commit.html)
- Special thanks to chatGPT<3