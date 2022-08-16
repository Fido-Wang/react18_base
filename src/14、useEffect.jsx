import { useState, useEffect } from 'react'
// useEffect()接受两个参数。
// 第一个参数是一个函数，异步操作的代码放在里面。
// 第二个参数是一个数组，用于给出 Effect 的依赖项，只要这个数组发生变化，useEffect()就会执行。
// 第二个参数可以省略，这时每次组件渲染时，就会执行useEffect()。
function App () {
    const [ count, setCount ] = useState(0)
    const [ name, setName ] = useState('wq')

    useEffect(()=> {
        // dom操作 挂载和更新都会执行useEffect()
        console.log('副作用执行了')
    }, [count])

    function add() {
        return setCount(count + 1)
    }

    function changeName() {
        return setName('xsg')
    }
    return (
        <>
            <h3>this is App</h3>
            <p>{ count }</p>
            <p>{ name }</p>
            <button onClick={ add }>+1</button>
            <button onClick={ changeName }>changeName</button>
        </>
    )
}

export default App