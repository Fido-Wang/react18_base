import React, {createContext} from 'react'
// const { Provider, Consumer } = createContext()

// 子组件(渲染列表)
function ListItem(props) {
    const { list , deleteFatherItem} = props

    return (
        <>
            <h3>this is Son2</h3>
            <ul>
                { list.map(item=>
                    <li key={item.id}>
                        { item.name}
                        { item.price }
                        { item.info }
                        <button onClick={ ()=> { deleteFatherItem(item.id) } }>删除</button>
                    </li>
                )}
            </ul>
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
    deleteList=(id)=> {
        const { list } = this.state
        console.log(111,id)
        this.setState({
            list: list.filter(item=> {
                return item.id != id
            })

        })
    }
    render() {
        return (
            <>
                {/*<h3>this is app</h3>*/}
                <ListItem list={ this.state.list } deleteFatherItem={ this.deleteList }/>
            </>
        )
    }
}

export default App