import React from "react";
import ListUI from "./ListUI";

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

function List() {
    return <ListUI
                   products={finProducts}
            
                   products2={finProducts2}
            />;
            
}

export default List;