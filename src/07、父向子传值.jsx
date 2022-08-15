import React from 'react'

// 父向子传值
function Son(props) {
    console.log(props.obj)
    const { obj } = props
    return (
        <>
            <h3>this is Son</h3>
            { obj.jsx }
            <ul>
                { obj.list.map(item => <li key={ item }>{ obj.fn(item) }</li>)}
            </ul>
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
    render() {
        return (
            <>
                {/*<h3>this is app</h3>*/}
                <Son obj={{...this.state} }/>
            </>
        )
    }
}

export default App