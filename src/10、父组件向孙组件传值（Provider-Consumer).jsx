import React, {createContext} from 'react'
const { Provider, Consumer } = createContext()

// 子组件
function Son(props) {
    return (
        <>
            <h3>this is Son</h3>
            <Grandson/>
        </>
    )
}

// 孙子组件
function Grandson(props) {
    return (
        <>
            <h5>this is Son2</h5>
            <Consumer>
                { value=> <p>{ value }</p>}
            </Consumer>
        </>
    )
}

class App extends React.Component{
    state= {
        value: 'App的value',
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

    render() {
        return (
            <>
                {/*这里的value属性是固定写法 不能用其他属性代替*/}
                <Provider value={ this.state.value }>
                    {/*<h3>this is app</h3>*/}
                    <Son/>
                </Provider>

            </>
        )
    }
}

export default App