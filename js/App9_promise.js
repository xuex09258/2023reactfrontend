// Promise 和 Async/Await：用於處理非同步操作。
// Promise 是一個表示非同步運算的「最終」完成或失敗的物件。
// 程式碼閱讀上更接近於同步的寫法，但實際上是非同步的。

// 遠端抓取網頁資料
function getData(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => {
                if(response.ok) {
                    return response.json();
                }
                throw new Error('回應失敗');
            })
            .then(data => resolve(data))
            .catch(error => reject(error))
    });
}

// 食用米抽檢不合個產品 url
const url = 'https://data.moa.gov.tw/Service/OpenData/FromM/AgricultureiRiceFailure.aspx';

getData(url).then(data => console.log(data))
            .catch(error => console.log(error))
console.log('finish')