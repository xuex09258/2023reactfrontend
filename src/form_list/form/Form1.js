import React from "react";
import FormUI from "./FormUI";

class Form1 extends React.Component {
    constructor(props) {
        super(props);
        // 設定 state 的初始資料
        this.state = {
            symbol: '',
            amount: ''
        };
    }

    // 處理 onSymbolChange, 處理商品代號變化-------------------444
    // e.target 指的就是商品代號輸入匡<input>物件
    handleSymbolChange = (e) => {
        this.setState({symbol: e.target.value})
    };

    // 處理 onAmountChange, 處理商品數量變化--------------------555
    // e.target 指的就是商品數量輸入匡<input>物件
    handleAmountChange = (e) => {
        this.setState({amount: e.target.value})
    };

    // 處理表單提交 onSubmit------------------------------------666
    handleSubmit = (e) => {
        e.preventDefault(); // 暫時不將資料送出 先在前端做  有後端時才送出資料

        const product = {symbol: this.state.symbol, amount: this.state.amount};// 此時就可以將 product 送到雲端伺服器中
          //此 product 物件是 json   用ajax 非同步送出
        console.log('此時表示有送出資料了: ', product);
    };

    // 使用 FormUI 組件渲染表單-------------------------------777
    render() {
        return (
            <FormUI 
                symbol = {this.state.symbol}
                amount = {this.state.amount}
                onSymbolChange = {this.handleSymbolChange}
                onAmountChange = {this.handleAmountChange}
                onSubmit = {this.handleSubmit}
            />
        );
    }
}

export default Form1;