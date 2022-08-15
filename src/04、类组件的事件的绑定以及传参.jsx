import React from 'react'
function App() {
    return (
        <>
            <h3>this is app</h3>
            <HelloComponent/>
        </>
    )
}

class HelloComponent extends React.Component{
    // 事件回调函数（标准写法 避免this指向问题）
    // 因为箭头函数的this 指向函数创建的时候所在的实例对象
    // 所以此时指向的是该组件实例 所以在组件内能用this取到该函数
    clickHandle = (e)=> {
        // 组织默认行为
        e.preventDefault()
        console.log(e)
    }
    click = (e,value)=> {
        console.log('e and value', e,value)
    }
    render() {
        // console.log(this)
        return (
            <>
                <div onClick={ this.clickHandle }>click button</div>
                <a onClick={ this.clickHandle } href="http://baidu.com">百度</a>
                <div onClick={ (e)=> { this.click(e,'this is message')} }>click button2</div>
            </>
        )
    }
}

export default App