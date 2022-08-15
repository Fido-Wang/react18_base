import React from 'react'

// 函数组件的创建和渲染
// 创建
function Hello() {
    return <div>
        this is hello
    </div>
}

// 类组件的创建和渲染
// 创建
// 类组件应该继承 React.Component 父类 ， 从而使用父类中提供的方法或属性
class HelloComponent extends React.Component{
    render() {
        return <div>this is HelloComponent</div>
    }
}

function App() {
    return (
        <>
            <h3>this is app</h3>
            {/*渲染*/}
            <Hello/>
            <HelloComponent/>
        </>
    )
}

export default App;
