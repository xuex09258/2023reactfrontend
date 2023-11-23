import React from "react";
import ListUI from "./ListjsonUI";
import myuserdata from './listjsondata.json'

// 使用者數據
const {finProducts} = myuserdata;

/*
const finProducts = [
    {id: 1, symbol: '2330.TW', amount: 10},
    {id: 2, symbol: '2317.TW', amount: 20},
    {id: 3, symbol: '1101.TW', amount: 30}
]
const finProducts2 = [
    {id: 1, symbol: '2330.TW', amount: 110},
    {id: 2, symbol: '2317.TW', amount: 220},
    {id: 3, symbol: '1101.TW', amount: 330}
];
*/
function Listgetjsondata() {
    return <ListUI
                   products={finProducts}
            
            />;
            
}

export default Listgetjsondata;