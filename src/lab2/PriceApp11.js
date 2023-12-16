import React, { useState, useEffect } from "react";
// 33 台灣證券交易所資料歷史交易資料
//    https://www.twse.com.tw/exchangeReport/STOCK_DAY?response=json&date=20231130&stockNo=2330

//33 1:14分 因為台灣證券交易所不支援跨域請求，所以必須在 package.json 中設定代理伺服器
 
function PriceApp11() {
    const stockNo = '2330';
    const date = '20231130';
    const [jsonData, setJsonData] = useState(null); // 11 存放 json 資料數據

    // 當 stockNo 或 date 有變動時才會渲染
    useEffect(() => {
        const url = `/exchangeReport/STOCK_DAY?response=json&date=${date}&stockNo=${stockNo}`;//33

        // 1:18 透過 fetch API 發送請求
        fetch(url)
            .then(response => {
                // 檢查是否成功 ?
                if(!response.ok) {
                    throw new Error("無法取得台灣證券交易所資料");
                }
                return response.json();
            })
            .then(jsonData => {        //44這邊收到的 就是上一行 return response.json(); 的json資料
                setJsonData(jsonData);
            })
            .catch(error => {
                console.error('Fetch error:', error);
            });

    }, [stockNo, date]); //22 當 stockNo 或 date 有變動時才會渲染

    return (
        <div className="center-conatiner" style={{ padding: '15px' }}>
            <h2>歷史股價</h2>
            <pre>{jsonData && JSON.stringify(jsonData, null, 2)}</pre> {/*//55 1:22 jsonData && console.log(jsonData) 把 JSON 資料 丟進來console看*/}
          
             {/*1:25 jsondata format
              <pre>{jsonData && JSON.stringify(jsonData, null, 2)}</pre> //55 1:25 把 JSON 資料 丟進來網頁看

             // 66 {jsonData && console.log(JSON.stringify(jsonData, null, 2)} */}
        </div>
    )
}
                           //66 1:24 要重新啟動  執行後 抓到 2330 資料 
export default PriceApp11;