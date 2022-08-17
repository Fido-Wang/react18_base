import { useState, useEffect, useRef } from 'react'

// useEffect()接受两个参数。
// 第一个参数是一个函数，异步操作的代码放在里面。
// 第二个参数是一个数组，用于给出 Effect 的依赖项，只要这个数组发生变化，useEffect()就会执行。
// 第二个参数可以省略，这时每次组件渲染时，就会执行useEffect()。
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