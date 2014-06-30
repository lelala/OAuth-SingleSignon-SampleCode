OAuth帳號整合範例
=======

下載連結：
----
https://github.com/lelala/OAuth-SingleSignon-SampleCode/archive/master.zip

說明：
----
解壓縮之後，開啟對應語言的資料夾即為該語言的Sample code。

設定config中的三個環境變數：
- ClientId：註冊app後取得
- ClientSecret：註冊app後取得
- RedirectURI：執行環境中的OAuthCallBack網址，需與註冊app時設定的資料相符（註冊app時不必要使用完整網址，可以只宣告到domain資訊如http://localhost即可）

最開始進入程式的頁面為Default，在Default中會有"登入"的按鈕，點擊"登入"進入OAuth流程。

進入OAuth流程後首先是使用者登入以及授權，這部分會再認證主機進行處理。

授權通過之後，會進入OAuthCallBack網頁，在OAuthCallBack中取得使用者資料，並與系統的帳號資訊進行整合。
