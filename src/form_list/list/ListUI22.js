import React from "react";

function ListUI22({products, products2}) {
    
    return (
        <div>
            <h2>金融商品列表(List)</h2>
            <ul>
                {
                    products.map((product) => (
                        <li key={product.id}>
                            {product.symbol} {product.amount}
                        </li>
                    ))
                }
                {
                    products2.map((product) => (
                        <li key={product.id}>
                            {product.symbol} {product.amount}
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default ListUI22;