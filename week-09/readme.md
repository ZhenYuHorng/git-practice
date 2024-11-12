### Step1
首先檢查錯誤日誌
```
sudo tail -n 20 /var/log/nginx/error.log
```
修改 nginx 的配置檔案
![image](https://hackmd.io/_uploads/ByGmzg5W1l.png)
### Step2
修完之後仍發現 port80 被占用
![image](https://hackmd.io/_uploads/rkd8fx5byl.png)
找到服務後刪除該服務
![image](https://hackmd.io/_uploads/ryeN7x9-kg.png)

```
 sudo kill 575
```
PS：期間還因為修改到`/etc/nginx/sites-available/default`發現改錯要改回來，結果空間不夠，順便學了怎麼清除廢物資料
![image](https://hackmd.io/_uploads/H1AoXxc-Jg.png)

### Step3
刪除後檢查防火牆發現，伺服器 HTTP 端口的連線會被拒絕(`icmp-port-unreachable`)，因此開始修改防火牆
![image](https://hackmd.io/_uploads/Bk-XVgqbkg.png)
1. 新增規則允許 TCP 協議的 HTTP 流量
```
sudo iptables -A INPUT -p tcp --dport 80 -j ACCEPT
```
2. 使用 iptables-save 指令將目前的 iptables 設定保存到 /etc/iptables/rules.v4 檔案中，以便在重新啟動時自動套用這些規則。
```
sudo iptables-save > /etc/iptables/rules.v4
```
### Step4
回到 localhost 發現出現 403 錯誤
![image](https://hackmd.io/_uploads/B1Jc8eqW1g.png)
檢查 `/var/myweb` 目錄及其內的 `index.html` 文件的權限
![image](https://hackmd.io/_uploads/H1fgdec-kx.png)

目錄權限為`drwxr-xr-x`，可以看成三個部分，[rwx, r-x, r-x]，對應以下表格


| 擁有者               | 同組用戶       | 其他用戶       |
| -------------------- | -------------- | -------------- |
| rwx                  | r-x            | r-x            |
| 擁有讀、寫、執行權限 | 有讀和執行權限 | 有讀和執行權限 |

而文件`/var/myweb/index.html`的權限是`-rw-r-----`


| 擁有者       | 同組用戶 | 其他用戶     |
| ------------ | -------- |------------ |
| rw-          | r--      | ---          |
| 有讀和寫權限 | 有讀權限 | 沒有任何權限 |

因此執行以下程式，以更改成讓 Nginx 能夠存取 index.html 文件，將文件的權限修改為 644
```
sudo chmod 644 /var/myweb/index.html
```
重啟 Nginx 後就能順利看到成功畫面了

![image](https://hackmd.io/_uploads/S1LlbO5W1x.png)


