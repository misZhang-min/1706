import React from 'react';
// 创建组件
import FunModule from './component/addModule/index'
// tab切换
import Tab from './component/tab/tab'
// todolist
import Todo from './component/todolist/todo'
//props 
import Father from './component/say/father'
import GrandFa from './component/say/grandfather'
import Fathers from './component/props/porps'
function App() {
  return (
    <div className="App">
      <Fathers />
    </div>
  );
}

export default App;
