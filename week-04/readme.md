# W4

1. i**nstance public IP**: [http://13.236.60.141](http://13.238.161.172)

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
    
6. **步驟 9 的 範例：**

```
server {
        listen 80 default_server;
        listen [::]:80 default_server;

        server_name _;

        location / {
                proxy_pass http://localhost:4000;

                proxy_http_version 1.1;

                proxy_set_header Upgrade $http_upgrade;

                proxy_set_header Connection 'upgrade';

                proxy_set_header Host $host;

                proxy_cache_bypass $http_upgrade;
                
                try_files $uri $uri/ =404;
              
        }
```

1. **Security Group 是什麼？用途為何？有什麼設定原則嗎？**
    
    在AWS中可以定義的防火牆規則，用於管控instance的網路流量，例如：
    
    - 僅開放必要的端口（如 HTTP 80）
    - 限制管理端口（如 SSH 22）僅允許特定 IP
2. **sudo 是什麼？為什麼有時需要加上 sudo，有時不需要？**
    
    使用`sudo` 指令可以用最高的權限執行指令，通常安裝軟體或是修改系統內部配置會需要。
    
3. **Nginx 的 Log 檔案在哪裡？怎麼找到的？怎麼看 Nginx 的 Log？**
    - Access Log：/var/log/nginx/access.log
    - Error Log：/var/log/nginx/error.log
    - 
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
        
    
    scp -i `/`C:`/`Users`/`Nina`/`Desktop`/`key`/`gitkey.pem `/`C:`/`Users`/`Nina`/`Desktop`/`key`/certificate.crt` ubuntu@[@13.238.161.172](mailto:ubuntu@13.238.161.172):`/home/ubuntu/`
    

- `i /path/to/your/key.pem`：指定您用于连接EC2实例的密钥文件。
    - `/`C:`/`Users`/`Nina`/`Desktop`/`key`/`gitkey.pem
- `/path/to/your/certificate.crt`：您本地计算机上证书文件的路径。
    - `/`C:`/`Users`/`Nina`/`Desktop`/`key`/certificate.crt`
- `ubuntu@your_ec2_public_ip`：替换为您的EC2实例的公共IP地址或域名。
    - [ubuntu@13.238.161.172](mailto:ubuntu@13.238.161.172)
- `/path/to/destination/`：指定在EC2实例上的目标目录（例如，可以使用 `/home/ubuntu/`）
    - `/home/ubuntu/`

scp -i /C:/Users/Nina/Desktop/key/gitkey.pem /C:/Users/Nina/Desktop/key/certificate.crt ubuntu@@13.238.161.172:/home/ubuntu

scp  /C:/Users/Nina/Desktop/key/certificate.crt ubuntu@13.238.161.172:/home/ubuntu

scp -i "C:/Users/Nina/Desktop/key/gitkey.pem" "C:/Users/Nina/Desktop/key/private.key" [ubuntu@13.238.161.172](mailto:ubuntu@13.238.161.172):/home/ubuntu/

scp -i "C:/Users/Nina/Desktop/key/gitkey.pem" "C:/Users/Nina/Desktop/key/ca_bundle.crt" [ubuntu@13.238.161.172](mailto:ubuntu@13.238.161.172):/home/ubuntu/

ssl_certificate /home/ubuntu/certificate.crt;
ssl_certificate_key /home/ubuntu/private.key;
ssl_trusted_certificate /home/ubuntu/ca_bundle.crt;