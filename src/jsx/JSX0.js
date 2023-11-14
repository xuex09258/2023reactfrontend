import React from 'react'

/**
 * JSX 基礎範例一：（0JSX Demo）
 * 使用數字、字串：
 */
function JSX0() {
    // 字串
    const title = "我的購物清單";

    // 數字
    const budget = 1000;
//=========================================================================
   
//=========================================================================
    return (
        <div>
            <h2>{title}</h2>
            預算: ${budget}<p />
            
        </div>
    );
}

export default JSX0;