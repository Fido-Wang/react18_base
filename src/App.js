import { useState, useEffect, useRef } from 'react'

function App () {
    const myRef = useRef() // 功能与类组件中的 React.createRef() 一样

    function alertValue() {
        console.log(myRef.current.value)
        alert(myRef.current.value)
    }
    return (
        <>
            <h3>this is App</h3>
            <input type="text" ref={ myRef }/>
            <button onClick={ alertValue }>提示输入框的值</button>
        </>
    )
}

export default App