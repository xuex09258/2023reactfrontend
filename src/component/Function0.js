// 基本的問候元件
function Greeting() {
    return <p>Hello 世界~</p>
}

// 基本的時間元件
function CurrentTime() {
    return <p>現在時間：{new Date().toLocaleTimeString()}</p>
}

function Function0() {
    return (
        <>
            <Greeting />
            <CurrentTime />
            
        </>
    );
}

export default Function0;