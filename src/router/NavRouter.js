import React from "react";
import { Link, Route, Routes } from "react-router-dom";
// JSX
import JSX0 from '../jsx/JSX0';
import JSXShoppingDemo from '../jsx/JSXShoppingDemo';
import JSXFinanceDemo from '../jsx/JSXFinanceDemo'
import PersonalExpenseTracker from '../jsx/PersonalExpenseTracker';
//JSX 自訂組件
import JSXMenuListDemo from "../jsx/JSXMenuListDemo";
import JSXMenuListSpicyDemo from "../jsx/JSXMenuListSpicyDemo";
import JSXDangerousDemo from "../jsx/JSXDangerousDemo";
import JSXShoppingCartPropsDemo from "../jsx/JSXShoppingCartPropsDemo"
//component
import Function0 from "../component/Function0";
import FuncApp from "../component/FuncApp";
import Class0 from "../component/Class0";
import ClassApp from "../component/ClassApp";

// Form & List
import Form1 from "../form_list/form/Form1";
import Form2 from "../form_list/form/Form2";
import List from "../form_list/list/List"

//List getjsondata
import Listgetjsondata from "../form_list/list/Listgetjsondata"
// Hooks GetJsonData
import GetJsonData from "../hooks/GetJsonData";

// FormANDList
import FormAndList from "../form_list/FormAndList";

// Update
import Counter from "../update/Counter";

// Hooks


function Home() {
    return <h2>Home Page</h2>
}

function Profile() {
    return <h2>Profile Page</h2>
}

function Settings() {
    return <h2>Settings Page</h2>
}

function NavRouter() {
    return (
        <div style={{display: 'flex'}}>
            {/* 左邊選單 */}
            <nav style={{borderRight: '1px solid', padding: '1rem'}}>
                <ul>
                    <li style={{cursor: 'pointer'}}><Link to="/">Home</Link></li>
                    <li style={{cursor: 'pointer'}}><Link to="/profile">Profile</Link></li>
                    <li style={{cursor: 'pointer'}}><Link to="/settings">Settings</Link></li>
                    <li><Link to="/JSX0">JSX0 basic</Link></li>
                </ul>
                <ol>
                    JSX
                    <li><Link to="/JSXShoppingDemo">JSX Shopping Demo</Link></li>
                    <li><Link to="/JSXFinanceDemo">JSX Finance Demo</Link></li>
                    <li><Link to="/PersonalExpenseTracker">Personal Expense Tracker</Link></li>
                    JSX 自訂組件
                    <li><Link to="/JSXMenuListDemo">JSX MenuList Demo</Link></li>
                    <li><Link to="/JSXMenuListSpicyDemo">JSX MenuList Spicy Demo</Link></li>
                    <li><Link to="/JSXDangerousDemo">JSX Dangerous Demo</Link></li>
                    <li><Link to="/JSXShoppingCartPropsDemo">JSX Shopping Cart Props Demo</Link></li>
                </ol>
                <ol>
                    Component
                    <li><Link to="/Function0">Function0（函數元件basic）</Link></li>
                    <li><Link to="/FuncApp">FuncApp（函數元件）</Link></li>
                    <li><Link to="/Class0">Class0（類別元件basic）</Link></li>
                    <li><Link to="/ClassApp">ClassApp（類別元件）</Link></li>
                    
                </ol>
                <ol>
                    Form
                    <li><Link to="/Form1">Form1</Link></li>
                    <li><Link to="/Form2">Form2</Link></li>
                    List
                    <li><Link to="/List">List</Link></li>
                    Listgetjsondata
                    <li><Link to="/Listgetjsondata">List get jsondata</Link></li>
                </ol>
                <ol>
                    2:29分 開始 Hooks GetJsonData 
                    <li><Link to="/GetJsonData">GetJsonData App</Link></li>
                </ol>
                <ol>
                    FormANDList 
                    <li><Link to="/FormAndList">Form and List</Link></li>
                </ol>
                <ol>
                    Update(函數/物件式更新 用Hooks說明)
                    <li><Link to="/Counter">Counter</Link></li>
                </ol>
                <ol>
                    50分開始 Hooks 
                    
                </ol>
            </nav>
            {/* 右邊內容 =================================================================*/}
            <main style={{flex: 1, padding: '1rem'}}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="/JSX0" element={<JSX0 />} />
                    {/* JSX */}
                    <Route path="/JSXShoppingDemo" element={<JSXShoppingDemo />} />
                    <Route path="/JSXFinanceDemo" element={<JSXFinanceDemo />} />
                    <Route path="/PersonalExpenseTracker" element={<PersonalExpenseTracker />} />
                    {/* JSX自訂組件 */}
                    <Route path="/JSXMenuListDemo" element={<JSXMenuListDemo />} />
                    <Route path="/JSXMenuListSpicyDemo" element={<JSXMenuListSpicyDemo />} />
                    <Route path="/JSXDangerousDemo" element={<JSXDangerousDemo />} />
                    <Route path="/JSXShoppingCartPropsDemo" element={<JSXShoppingCartPropsDemo />} />
                    {/* Component */}
                    <Route path="/Function0" element={<Function0 />} />
                    <Route path="/FuncApp" element={<FuncApp />} />
                    <Route path="/Class0" element={<Class0 />} />
                    <Route path="/ClassApp" element={<ClassApp />} />
                    {/* Form & List */}
                    <Route path="/Form1" element={<Form1 />} />
                    <Route path="/Form2" element={<Form2 />} />
                    <Route path="/List" element={<List />} />
                    {/* Listgetjsondata */}
                    <Route path="/Listgetjsondata" element={<Listgetjsondata />} />
                    {/* 2:29 Hooks GetJsonData*/}    
                    <Route path="/GetJsonData" element={<GetJsonData />} />
                    {/* // FormANDList */}
                    <Route path="/FormAndList" element={<FormAndList />} />
                    {/* Update */}
                    <Route path="/Counter" element={<Counter />} />
                    {/* Hooks */}
                </Routes>
            </main>
        </div>
    );
}

export default NavRouter;