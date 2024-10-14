# W4

1. i**nstance public IP**: 13.238.161.172
2. **What is instance type ？**
    
    VM 中的硬體配置稱之為 instance type，不同的工作負載適合使用不同的 instance type ，像是計算密集的工作可能就需要更多的 CPU 空間。
    
3. **Nginx 是什麼？有哪些用途與特性？**
    
    Nginx 是非同步框架的 wed server，主要用於 HTTP 伺服器、反向代理伺服器和負載平衡器。效能比傳統 Apache 來得好，記憶體消耗的也低，並且有優良的穩定性。
    
4. **PM2 套件是什麼？有什麼用處？**
    
    pm2 是 node.js 的進程管理工具，主要功能有
    
    - Load balancing
    - zero-downtime reloads
    - environment management
    - log management
5. **步驟 9 中提到的 `proxy` 是什麼意思？為什麼要透過 Nginx 來 `proxy` 到 Express 開發的 Web Server？**
    
    Proxy 的意思是代理，有兩種種類。Forward Proxy 作為客戶端和伺服器之間的中間層,通常用於代理多個客戶端。其主要優點包括:
    
    - 保護客戶端隱私,維持匿名性,從而增加安全性
    - 過濾 response 以及 request,可進行內容控制
    - 可以修改 request,例如添加或更改 headers
    
    Reverse Proxy 位於伺服器端,客戶端無法直接得知響應的實際伺服器。其主要優點包括:
    
    - 實現負載平衡(Load balancing),分散伺服器負擔,提高系統整體效能
    - 支援 Canary deployment,便於新版本的漸進式部署和測試
    - 提供 Caching 功能,減少後端伺服器負擔,加快響應速度
    - 增強安全性,隱藏後端伺服器的實際結構和 IP
    
    用 Nginx 當作 Express 開發的做反向代理可以優化性能跟增加安全性，更專注於處理業務邏輯以及提升系統效能。當流量增加時，Nginx 能夠把請求分散到多個 Express 上，同時 Nginx 可以緩存靜態文件，都可以有效減少伺服器的負擔。Nginx 也可以作為防火牆，限制不必要的訪問請求，以加強安全性
    
6. **步驟 9 的 Nginx 設定檔範例：**

```
server {
    listen 80;
    server_name 13.238.161.172;

    location / {
        proxy_pass http://localhost:3000; 
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

1. **Security Group 是什麼？用途為何？有什麼設定原則嗎？**
    
    Security Group 是雲端平台中的防火牆規則，用於控制進出 instance 的網路流量。可以設定允許或拒絕特定 IP 或端口範圍的訪問。設定原則應根據應用需求進行：
    
    - 僅開放必要的端口（如 HTTP 80, HTTPS 443）
    - 限制管理端口（如 SSH 22）僅允許特定 IP
2. **sudo 是什麼？為什麼有時需要加上 sudo，有時不需要？**
    
    使用`sudo` 指令可以用最高的權限執行指令，通常安裝軟體或是修改系統內部配置會需要。
    
3. **Nginx 的 Log 檔案在哪裡？怎麼找到的？怎麼看 Nginx 的 Log？**
    
    Nginx 的默認 Log 檔案路徑通常在：
    
    - 訪問日誌：`/var/log/nginx/access.log`
    - 錯誤日誌：`/var/log/nginx/error.log`
    可以使用命令 `tail -f /var/log/nginx/access.log` 實時查看訪問記錄，或使用 `less` 或 `cat` 來檢視歷史記錄。
4. **其他遇到的問題**
- modules 不上傳到底可不行？截至交作業前尚未解決
    - Nginx 的設定檔錯誤
1. **Reference**
    - nginx設定
        
        https://www.lidosblog.com/article/3
        
        https://ithelp.ithome.com.tw/articles/10241354
        
        https://experienceleague.adobe.com/zh-hant/docs/commerce-operations/configuration-guide/multi-sites/ms-nginx
        
    - Proxy
        
        https://www.jyt0532.com/2019/11/18/proxy-reverse-proxy/
        
        https://lidemy5thwbc.coderbridge.io/2021/09/09/ngix/
        
    - nginx log
        
        https://docs.nginx.com/nginx/admin-guide/monitoring/logging/