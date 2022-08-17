// React: 框架的核心包
// ReactDOM: 专门做渲染的相关的包

import React from 'react';
import ReactDOM from 'react-dom/client';
// 应用的全局样式文件
import './index.css';
// 引入根文件
import App from './App';

// 将app组件渲染到一个id为root的dom节点上
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);
export default root
