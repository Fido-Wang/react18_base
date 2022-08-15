// jsx控制样式
// 1、行内样式 - 在元素身上绑定一个style属性即可
// 2、类名样式 - 在元素身上绑定一个calssName属性即可
import './app.css'

const style = {
    color: 'red',
    fontSize: 24
}
// 动态控制一下这个active类名 满足条件才生效
const activeFlag = true

function App() {
    return (
        <div>
            <span style={ style }>this is a span</span>
            <span className="active">this is a span</span>
            <span className={ activeFlag? 'active': null}>this is a span</span>
        </div>
    )
}

export default App;
