import React,{ useContext, useState, useEffect } from 'react'
// 第一步 使用React Context API 在组件外部创建一个Context
const AppContext = React.createContext({})

function Son1() {
    // useContext()钩子函数用来引入Context对象 从中获取 name 属性
    console.log(useContext(AppContext)) // { name: 'WangQi' }
    const { name } = useContext(AppContext)
    return (
        <>
            <h3>this is Son1</h3>
            <p>{ name }</p>
        </>
    )
}

function Son2() {
    const { name } = useContext(AppContext)
    return (
        <>
            <h3>this is Son2</h3>
            <p>{ name }</p>
        </>
    )
}

function App() {
    return (
        // AppContext.Provider提供了一个Context对象 这个对象可以被子组件共享
        <AppContext.Provider value={{name: 'wq'}} >
            <>
                <h3>this is App</h3>
                <Son1/>
                <Son2/>
            </>
        </AppContext.Provider>

    )
}

export default App