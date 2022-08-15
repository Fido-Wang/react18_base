import React from 'react'

// 接受父组件接受到的另一个子组件的值
function Son(props) {
    // 接受父组件传过来的值
    return (
        <>
            <h3>this is Son</h3>
            <p>{ props.fatherValue? props.fatherValue: 0 }</p>
        </>
    )
}

// 先传值给父组件
function Son2(props) {
    const { sendValue } = props
    function handleClick() {
        sendValue(22222)
    }
    return (
        <>
            <h3>this is Son2</h3>
            <button onClick={ handleClick }>点击把值传给父组件</button>
        </>
    )
}

class App extends React.Component{
    state= {
        value: null,
        list: [1,2,3],
        obj: {
            name: 'jay',
            age: 40
        },
        // 传递函数
        fn: (value)=> {
            return value * 2
        },
        // 传递一个jsx节点
        jsx: (<span style={{ color:'red'}}>this is jsx</span>)
    }
    getValue=(value)=> {
        console.log('父组件接受',value)
        this.setState({
            value: value
        })
    }
    render() {

        return (
            <>
                {/*<h3>this is app</h3>*/}
                <Son fatherValue={ this.state.value }/>
                <Son2 sendValue={ this.getValue }/>
            </>
        )
    }
}

export default App