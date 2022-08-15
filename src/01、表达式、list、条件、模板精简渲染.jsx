
const getHtag = (type)=> {
    if(type == 1) {
        return <h1>this is a h1</h1>
    }else if(type == 2) {
        return <h2>this is a h2</h2>
    }else if(type == 3) {
        return <h3>this is a h3</h3>
    }
}

function App() {
    const name = '王启'
    const list = [
        {name: '王', age: 19, id: 1},
        {name: '李', age: 23, id: 2},
        {name: '周', age: 48, id: 3},
    ]
    const flag = true
  return (
    (<div className="App">
        {/*三元表达式*/}
        <h3>{ flag? '真棒':"真菜"}</h3>


        {/*条件渲染 三元表达式（常用） 逻辑&&运算*/}
        { flag? (
            <div>
                <span>this is a span tag</span>
            </div>
        ): null}

        { flag && <span>this is a span2</span>}


        {/*渲染列表*/}
        <ul>
            {/*// 遍历列表时候 同样需要一个类型为bunber/string类型的key 提高diff性能*/}
            { list.map(item=> <li key={ item.id }>姓名：{ item.name }， 年龄：{ item.age }</li>)}
        </ul>

        {/*有一个状态 type*/}
        {/*1 -> h1*/}
        {/*2 -> h2*/}
        {/*3 -> h3*/}
        {/*原则： 模板中的逻辑尽量保持精简*/}
        {/*复杂的多分枝的逻辑 收敛为一个函数 通过一个专门的函数来写分支逻辑 模板中只负责调用*/}
        { getHtag(1) }
        { getHtag(2) }
        { getHtag(3) }
    </div>)
  );
}

export default App;
