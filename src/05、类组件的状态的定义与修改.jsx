import React from 'react'

class Test extends React.Component {
    // 1、 定义当前组件状态
    state = {
        name: 'WANGQI',
        num: 0
    }
    changeName =()=> {
        // 修改state中的状态
        // 注意： 不可以直接给state中的值赋值 必须通过setState方法
        this.setState({
            name: 'XIASHUGANG'
        })
    }
    addNum=()=> {
        const { num } = this.state
        this.setState({
            num: num+1
        })
    }
    render() {
        const { name,num } = this.state
        return (
            <>
                <h3>this is Test</h3>
                <p> { this.state.name }</p>
                <p>{ name }</p>
                <p> { num }</p>
                <button onClick={ this.changeName }>修改name</button>
                <button onClick={ this.addNum }>num+1</button>
            </>
        )
    }
}

function App() {
    return (
        <>
            <h1>this is app</h1>
            <Test/>
        </>
    )
}

export default App