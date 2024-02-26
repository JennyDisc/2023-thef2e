## 一、作品說明
這是參與 2023 年 THE F2E 總統即時開票全台地圖的作品。運用中選會 2020 年各縣市、區域、鄉鎮里的總統投票資料，透過 D3.js 資料視覺化套件以台灣地圖型式和縣市、區域、鄉鎮里三個組成的篩選列表，供使用者可指定區域來檢視該年度的總統大選數據。網站設計採用 2023 年 THE F2E 大會 UI 設計組作品進行響應式網頁設計，供電腦與手機裝置的使用者瀏覽。

## 二、開發工具介紹
- 作業系統：Windows 11（64 bit）
- 開發工具：Visual Studio（版本 1.85.10）
- JavaScript 框架：Vue 3（Options API寫法）
  - 套件：axios、xlsx、d3
- Vue3 建構工具（預處理器）：Vite （ Node.js 版本 18.17.1）
  - 套件：pinia
- 切版框架：Bootstrap 5
  - CSS 預處理器：SCSS

## 三、專案資料夾架構
```
├── public                     # 包含專案程式的靜態資源，如 excel 檔案與 GeoJSON 檔案。
├── src                          # 專案的主要的開發檔案。
│   ├── assets/              # 包含應用程式的靜態資源，如圖像、字體等。
│            └── base/       # 定義常用的HTML元素初始設定。
│            └── img/        # 專案程式使用到的圖像。
│            └── layout/    # 針對各分頁中重複區塊進行樣式定義。
│            └── pages/     # 專案程式的頁面檔案，對主頁或各分頁做樣式設定。
│            └── untils/     # 匯入其他scss檔案中的工具如變數、自行定義的字型樣式、間距。
│   ├── components/   # 專案程式中可重複使用元件或Pinia Store。
│   ├── router/             # 建立專案程式的路由表，讓系統能透過路徑去管控要執行哪個頁面裡的哪個元件。
│   ├── views/             # 專案程式的頁面元件，用於建立不同的頁面。
│   ├── App.vue          # 專案程式的主應用程式元件，也可以說是整個網頁的根元件。
│   ├── main.js            # 專案的程式進入點，所有檔案都需要跟main.js 有關連性才能被正確編譯。
├── index.html            # 專案程式的主要HTML文件，內容對應載入JavaScript的main.js檔案和渲染應用程式。
├── package.json        # 專案的npm套件管理檔案。
├── README.md      # 說明專案與運行的文件。
└── vite.config.js        # Vite的設定檔案，用於配置建置工具Vite的行為（包含專案編譯路徑設定）。
```

## 四、執行專案
```
npm install   #依照 vite 專案中 package.json 檔案內的項目進行安裝
npm run dev   #執行 vite 專案
```

## 五、數據資料來源
- 中選會「選舉及公投資料庫」（取2020年總統副總統資料）並經整理
  - https://db.cec.gov.tw/ElecTable/Election?type=President
- 「政府資料開放平臺」（直轄市、縣市界線(TWD97經緯度)）
  - https://data.gov.tw/dataset/7442

## 六、相關網站連結
- 2023 年 THE F2E 活動
  - 官網
    - https://2023.thef2e.com/
  - 關卡資訊（Mission 2 - 總統即時開票全台地圖）
    - https://2023.thef2e.com/news

## 七、設計稿資訊
- Mission 2 - 總統即時開票全台地圖：個人組UI設計師Yuni
  - https://2023.thef2e.com/users/12061579704055397263?week=2
