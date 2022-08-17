import React, { useState } from 'react'

function Son(props) {
    // 如果useState() 中的参数不是一个固定值 而是需要通过计算得出 可以使用函数返回一个值
    // 例: 将父组件传过来的值 当作初始状态
    const [ sonNum , setNum] = useState(()=> props.num)
    function add() {
        console.log('add')
        return setNum(sonNum + 1) // 第一种写法
        return setNum(sonNum =>  sonNum + 1)  // 第二种写法 参数可以是一个箭头函数 箭头函数的默认参数就是当前的状态值
    }
    return(
        <>
            <p>{ sonNum }</p>
            <button onClick={ add }>+ 1</button>
        </>
    )
}

function App () {
    // 组建的更新过程
    // 1、组件第一次渲染
    // a、从头开始执行该组件中的代码逻辑
    // b、调用useState（0）将传入的参数作为状态初始值：0
    // c、渲染组件 此时 获取到的状态count值为0

    // 2、组件第二次渲染
    // a、点击按钮 调用setCount（count+1） 修改状态 因为状态发生改变 所以组件会重新渲染
    // b、组件重新渲染时 会再次执行该组件中的代码逻辑
    // c、再次调用usrState（0） 此时react内部会拿到最新的状态值而非初始值 比如 该案例中最新的状态值为1
    // d、再次渲染组件 此时 获取到的状态 count值为1
    const [ num ,setNum ] = useState(99)
    const [ count, setCount] = useState(1)
    console.log('count', count)
    return (
        <>
            <h3>this is App</h3>
            <p>{ count }</p>
            <button onClick={ ()=> { setCount( count>3? count: count+ 1)}}>+1</button>
            <Son num={ num }/>
        </>
    )
}

export default App