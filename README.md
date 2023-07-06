# Project-simple-twitter-vue

### Introduction

這是一份多人協作畢業專案，仿造 [Twitter](https://twitter.com/) 產品內容及功能，所做的簡化專案。 採前後端分離開發。

### 採用技術

- Vue2 + Vuex + Vue Router + Axios + SCSS
- 後端佈署在 Fly.io [點此連結到後端 GitHub 入口](https://github.com/sss63232/twitter-api-2020)
- 串接 [imgur](https://api.imgur.com/) API

### Getting Started

#### 複製本專案

```
git clone https://github.com/a2623212/project-simple-twitter-vue.git
```

#### 進到專案資料夾

```
cd project-simple-twitter-vue
```

#### 安裝所需要的套件

```
npm install
```

#### 在本地啟動專案

```
npm run serve
```

- 請注意，本專案上傳圖片串接 [imgur](https://api.imgur.com/)，imgur 不接受 `localhost` 的 request，建議用 Network: `http://192.168.50... 開啟

- 請注意本專案適合用 v16 以下的 Node.js

#### 打包專案用於佈署

```
npm run build
```

### 測試帳號

- 一般使用者
  - account: `user1` / password: `12345678`
  - account: `user2` / password: `12345678`
  - account: `user3` / password: `12345678`
  - account: `user4` / password: `12345678`
  - account: `user5` / password: `12345678`
- 後臺管理員
  - account: `root` / password: `12345678`

### Demo in here

👉 請進入這個地方[專案入口](https://a2623212.github.io/project-simple-twitter-vue/)

✅ **Features** ✅

**前台登入**

- 註冊功能
- 登入功能
- 推文功能
  - 瀏覽功能
  - 回覆功能
  - 喜愛(新增/取消)
- 用戶功能
  - 設定資料
  - 編輯相片、名稱、自我介紹
  - 追蹤他人(新增/取消)

**後台登入**

- 編輯功能
  - 使用者
  - 貼文

### 部分截圖

**前台登入頁**
![](https://i.imgur.com/Jnos6T3.png)

**註冊頁**
![](https://i.imgur.com/iMCCY9Z.png)

**首頁**
![](https://i.imgur.com/Puwm530.png)

**個人資料頁**
![](https://i.imgur.com/AeQtwdN.png)

**設定資料頁**
![](https://i.imgur.com/SCi9aIi.png)

**後台登入頁**
![](https://i.imgur.com/xHiJDtQ.png)

**通知提示**
![](https://i.imgur.com/AiSoSx8.png)
![](https://i.imgur.com/wPbvw3X.png)

## Contributors

[AlvinWang627](https://github.com/AlvinWang627)
[Ally Yeh](https://github.com/a2623212)
[Anita](https://github.com/Tingching0602)

Thanks, and please any feedbacks！😊
