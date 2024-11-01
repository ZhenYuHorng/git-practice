### 回答問題
1.  **你的網址**:  https://nina.papperhelper.xyz
2. **你在哪裡購買網域的**
在godaddy上購入

![image](https://hackmd.io/_uploads/S1ncy8MeJg.png)

3. **DNS 的 A record 是什麼？**
DNS 這個系統是用來查詢網域對應到的 IP，A record 用於紀錄 IPv4 的 IP 位址，把網域配對都該該 IP

4. **DNS 的 NS record 是什麼？**
DNS 把網域轉換成 IP 的過程中會一連串的解析，NS 代表 "Name Server"，負責用於紀錄 DNS 系統解析中託管的 NDS 紀錄。

5. **Domain Name vs FQDN vs URL 這三者分別為何？**
    - **Domain Name（網域名稱)**: 用來代替難以被記憶的 IP 名稱，例如: chatgpt.com
    - **FQDN（Fully Qualified Domain Name，全域完整網域名稱)**: 完整的網域名稱，通常包括主機名（hostname）和網域名稱，並且由最頂層的主機名稱開頭例如: www.chatgpt.com ，網域名稱更具有唯一性
    
    -  **URL（Uniform Resource Locator，統一資源定位符）**: 完整的資源定位地址，包含訪問網頁的協定、網域名 、路徑以及可能的查詢參數，例如: https://chatgpt.com/c/670f2509-4ae4-8006-b541-fff36e7b77f5 ，

    ![image](https://hackmd.io/_uploads/HkwO7rQgkx.png)
    source :https://shozzle.dev/posts/allen/dns-parse/


6. **為什麼應該要為網站加上憑證？而不是直接用 http 就好？**
http 採用的是名文傳輸，隱私資料會在上傳給伺服器的時候發生外洩，SSL 的加密技術可以解決這個問題，SSL 把明文加密成亂碼，只有擁有解密方法的瀏覽器跟主機可以還原成原文。

### Reference
https://linux.vbird.org/linux_server/rocky9/0210dns.php
https://shozzle.dev/posts/allen/dns-parse/https://www.hostinger.in/tutorials/fqdn