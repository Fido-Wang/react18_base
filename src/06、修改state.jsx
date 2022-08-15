import React from 'react'

class Test extends React.Component {
    state = {
        deleteValue: null,
        count: 0,
        list: [1,2,3,4],
        person: {
            name: 'jack',
            age: '18'
        },
        newPerson: {
            name: 'rose',
            age: 16
        }
    }
    addCount=()=> {
        const { count } = this.state
        this.setState({
            count: count + 1
        })
    }

    increase=()=> {
        const { count } = this.state
        let curCount = count - 1
        if(curCount <0) return
        this.setState({
            count: curCount
        })
    }

    // 数组后添加原色
    addList=()=> {
        let { list } = this.state
        let curItem = list[list.length-1] + 1
        this.setState({
            list: [... list, curItem]
        })
    }

    // 删除数组最后一个元素
    decreaseList=()=> {
        const { list } = this.state
        this.setState({
            list: list.slice(0, list.length-1)
        })
    }

    // 删除某个元素
    decreaseValue = (e)=> {
        console.log(e)
        let { list, deleteValue } = this.state
        this.setState({
            list: list.filter(item=> {
                return item != deleteValue
            })
        })
    }

    // 监听输入框的输入事件
    changeValue=(e)=> {
        console.log(e.target.value)
        const { deleteValue } = this.state
        this.setState({
            deleteValue: e.target.value
        })
    }
    // 修改person中的name
    changePersonName=()=> {
        const { person, newPerson } = this.state
        this.setState({
            // person: {
            //     ...person,
            //     name: 'rose',
            //     age: 17
            // }
            person: Object.assign(person, newPerson)
        })
    }

    render() {
        const { count, list, person, deleteValue } = this.state
        return (
            <>
                <h3>this is Test</h3>
                <p>num: { count }</p>
                <button onClick={ this.addCount }>count +1</button>
                <button onClick={ this.increase }>count -1</button>

                <p>-------------------</p>
                <ul>
                    { list.map(item=> { return <li key={ item }>{ item }</li>})}
                </ul>
                <button onClick={ this.addList }>addList</button>
                <button onClick={ this.decreaseList }>decreaseList</button>

                <p>-------------------</p>
                <span>{ person.name }, { person.age }</span>
                <button onClick={ this.changePersonName }>changePersonName</button>
                <p>-------------------</p>

                <div>在下方输入一个数字 点击decreaseValue按钮 删除该数字</div>
                <textarea onInput={ (e)=> { this.changeValue(e) } } >{ deleteValue }</textarea>
                <button  onClick={ (e)=> { this.decreaseValue(e) } }>decreaseValue</button>
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