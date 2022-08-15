import React, {createContext} from 'react'
// const { Provider, Consumer } = createContext()

// 子组件(渲染列表)
function ListItem(props) {
    // 通过该组件的标签内的children属性 接受到父组件的值
    const { children } =  props
    return (
        <>
            <h3>this is Son2</h3>
            <h4>{ children.value }</h4>
            <ul>
                { children.list.map(item=> {
                    return <li key={ item.id }>{ item.name }</li>
                })}
            </ul>
            <ul>
                { children.arr.map(item=> {
                    return <li key={ item }>{ children.fn(item) }</li>
                })}
            </ul>
            <p>{ children.jsx }</p>
        </>
    )
}

// 父组件
class App extends React.Component{
    state= {
        value: 'App的value',
        list: [
            { id: 1, name: '超级好吃的棒棒糖', price: 18.8, info: '开业大酬宾，全场8折' },
            { id: 2, name: '超级好吃的大鸡腿', price: 34.2, info: '开业大酬宾，全场8折' },
            { id: 3, name: '超级无敌的冰激凌', price: 14.2, info: '开业大酬宾，全场8折' }
        ],
        arr: [1,2,3],
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
                {/*<h3>this is app</h3>*/}
                {/*只要在组件标签的内部写了任何内容 都会出现在组件的props中的childre属性中*/}
                {/*支持 普通文本 普通标签元素 函数 jsx*/}
                <ListItem>{{...this.state} }</ListItem>
            </>
        )
    }
}

export default App