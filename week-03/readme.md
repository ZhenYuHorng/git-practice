# readme

### 零、CheckBox

- [x]  什麼是 AWS Region, AZ (availability zones)
- [x]  使用AWS服務要如何選擇 Region？有甚麼考量因素？

### 一、AWS Region & AZ (Availability Zones)

| **AWS Region**  | **Availability Zones (AZ)** |
| --- | --- |
| AWS用地理區域劃分成多個 AWS Region  ，這些獨立的區域裡會多個數據中心，通常分布在不同城市，離台灣比較近且常用的節點分別是香港、日本及新加坡 | 每個 AWS Region都包含多個 AZ ，使用AZ有諸多好處，像是每個 AZ 都有自己的電力供應和網絡連接，若是一個 AZ 出問題其他的還可以 cover ，也間接實現 AWS 服務的穩定性 |

### 二、如何選擇 Region

1. 價格
    
    由於雲端服務要價不斐，所以通常價格是首要考量，AWS 的定價因 Region 而異，取決於當地的基礎設施成本、能源價錢等等。
    
2. 延遲 
    
    但如果服務追求的是 real time 的服務，通常距離所在地越近的 Region  數據從源頭到目的地所需的時間越短，提升服務品質。
    
3. 可用性
    
    若專案要使用特定的服務時，需要在特定的 Region 運行，例如：[Copying an AMI](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/CopyingAMIs.html) & [Data Transfer](https://aws.amazon.com/tw/ec2/pricing/on-demand/#Data_Transfer)。
    
4. 法規合規性
    
    不同的 Region 會配合地區的法規標準，以符合當地業務進行的合法性，因此選擇正確的 Region 可以幫助專案在全球運行的順暢。
    

### 三、Reference

https://medium.com/i-發客/不懂裝懂aws-region-az-e888bc15b3a6

https://ithelp.ithome.com.tw/m/articles/10315419