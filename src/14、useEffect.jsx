import { useState, useEffect } from 'react'
import root from './index'

// useEffect()接受两个参数。
// 第一个参数是一个函数，异步操作的代码放在里面。
// 第二个参数是一个数组，用于给出 Effect 的依赖项，只要这个数组发生变化，useEffect()就会执行。
// 第二个参数可以省略，这时每次组件渲染时，就会执行useEffect()。
function App () {
    const [ count, setCount ] = useState(0)
    const [ name, setName ] = useState('wq')

    // 1、在组件挂载之后 执行一个定时器
    // useEffect是一个监听副作用的函数 接受两个参数
    // 第一个参数是一个函数 第二个参数是一个数组
    // 如果没有第二个函数 则每次当dom渲染的时候（任何状态值发生变化） 都会执行第一个参数=>函数
    // 如果有第二个参数 当是一个空数组的时候 意味着只在第一次渲染时执行第一个参数=>函数
    // 如果第二个参数数组里面包含某个状态值 则在第一次渲染 和 当这个状态值发生改变时 都执行第一个参数=>函数
    // 因此 如果第二个参数是一个空数组 则useEffect 中的函数 类似于类组件的 componentDidMount
    useEffect(()=> {
        console.log('effect')
        let timer = setInterval(()=> {
            setCount( count=> count+1)
        },1000)
        // useEffect函数返回的函数 相当于类组件里面的 componentWillUnmount(组件销毁之前)
        return ()=> {
            console.log('xiezai')
            // 清除定时器
            clearInterval(timer)
        }
    },[])

    function add() {
        return setCount(count + 1)
    }

    function changeName() {
        return setName('xsg')
    }
    // 卸载组件
    function unmount() {
        // 如果要在这里卸载 id == root 的组件 需要在index.js中暴露出root 在当前组件引入 才能卸载
        root.unmount()
    }
    return (
        <>
            <h3>this is App</h3>
            <p>{ count }</p>
            <p>{ name }</p>
            <button onClick={ add }>+1</button>
            <button onClick={ changeName }>changeName</button>
            <button onClick={ unmount }>卸载组件</button>
        </>
    )
}

export default App