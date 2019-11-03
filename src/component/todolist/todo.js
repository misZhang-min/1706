import React, { Component } from 'react'
// 引入css
import './css/todo.css'
// 创建组件
class Todo extends Component {
    // 设置状态
    state = {
        // 未完成
        todolist: [],
        // 已完成
        donelist: [],
        // input value值
        topVal: ''
    }
    // 触发input change 获取value值
    changeVal = (val) => {
        console.log(val)
        // input值
        this.setState({
            topVal: val
        })
    }
    //点击 button
    sendCli = (topVal) => {
        console.log(topVal)
        console.log(this.refs.inp.value)
        let { todolist } = this.state
        if (this.refs.inp.value === '') {
            alert('不能为空')
        } else {
            console.log('sa')
            console.log(todolist)

            if (todolist.length === 0) {
                // 点击按钮 把input的value值 放到 todolist 这个数组里
                todolist.push(this.refs.inp.value)
                this.setState({
                    todolist
                }, () => {
                    this.refs.inp.value = ''
                })

            } else {
                todolist.forEach((item, key) => {
                    if (item === this.refs.inp.value) {
                        alert('buxing')
                    } else {
                        console.log('xing')

                    }
                })
            }


        }

    }
    // 触发未完成 添加到donelist
    doneChange = (key) => {
        let { todolist, donelist } = this.state
        // todolist.splice(key,1)
        // 截取删除的一项，添加到 donelist
        donelist.push(todolist.splice(key, 1)[0])
        this.setState({
            donelist,
            todolist
        })
        console.log(donelist)
    }
    // 触发已完成 添加到todolist
    retChange = (index) => {
        let { donelist, todolist } = this.state
        todolist.push(donelist.splice(index, 1)[0])
        this.setState({
            todolist,
            donelist
        })
    }
    // 渲染虚拟dom
    render() {
        // 返回渲染的虚拟dom
        let { topVal, todolist, donelist } = this.state
        console.log(this)
        return <div>
            {/* top */}
            <div className='topbox'>
                <input ref='inp' className='inpbox' placeholder='todo' type="text" value={topVal} onChange={(e) => { this.changeVal(e.target.value) }} />
                <button className='btn' onClick={() => { this.sendCli(topVal) }}>发送</button>
            </div>
            {/* center */}
            <div>
                <h1>未完成(todolist)</h1>
                <div className='mainbox'>
                    {
                        todolist.map((item, key) => {
                            return <div key={key} className='centerbox'>
                                <input ref='NoOver' onChange={() => { this.doneChange(key) }} key={key} type="checkbox" checked={false} />
                                <span>{item}</span>
                            </div>
                        })
                    }
                </div>
            </div>
            {/* footer */}
            <div>
                <h1>已完成(donelist)</h1>
                <div className='mainbox'>
                    {
                        donelist.map((i, index) => {
                            return <div key={index} className='centerbox'>
                                <input onChange={() => { this.retChange(index) }} type="checkbox" checked={true} />
                                <span>{i}</span>
                            </div>
                        })
                    }
                </div>
            </div>

        </div>
    }
    // 组件挂载结束  以获取真实dom
    componentDidMount() {
        const refsVal = this.refs.inp.value
        console.log(refsVal)
       
    }
}
export default Todo