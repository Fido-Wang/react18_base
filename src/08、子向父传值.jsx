import React from 'react'

// 父向子传值
function Son(props) {
    const { sendHandle } = props
    function send() {
        sendHandle(111)
    }
    return (
        <>
            <h3>this is Son</h3>
            <button onClick={ ()=> { sendHandle(111)} }>click</button>
            <button onClick={ send }>click</button>
        </>
    )
}

class App extends React.Component{
    state= {
        list: [1,2,3],
        // 传递函数
        fn: (value)=> {
            return value * 2
        },
        // 传递一个jsx节点
        jsx: (<span style={{ color:'red'}}>this is jsx</span>)
    }
    handle=(value)=> {
        console.log('父组件接受值')
        console.log(value)
    }
    render() {
        return (
            <>
                {/*<h3>this is app</h3>*/}
                <Son sendHandle={ this.handle }/>
            </>
        )
    }
}

export default App