import React, { Component } from 'react'
import './css/porps.css'
// 儿子组件
class Son extends Component {
    state = {
        // 接收儿子说的话
        sonVal: ''
    }
    // 获取儿子 说的话
    sonSay = (val) => {
        console.log(val)
        this.setState({
            sonVal: val
        })
        
    }
    // 点击发送儿子说给爸爸的话
    sendFa = (sonVal)=>{
        this.props.funDog(sonVal)
    }
    render() {
        console.log(this)
        const { sonVal } = this.state
        const { said } = this.props
        return <div className='SonBox'>
            <input value={sonVal} type="text" onChange={(e) => { this.sonSay(e.target.value) }} />
            <button onClick={()=>this.sendFa(sonVal)}>发送</button>
            <div>
                <span>爸爸说：</span>
                {
                    said.map((item, key) => {
                        return <div key={key}>{item}</div>
                    })
                }
            </div>

        </div>
    }
}
// 父亲组件
class Father extends Component {
    state = {
        // 接收爸爸说的话
        Val: '',
        fatherlist: [], //父亲说的话
        SonList:[]
    }
    // 获取input 值
    getFather = (val) => {
        console.log(val)
        // 更新 input 值
        this.setState({
            Val: val
        })
    }
    // 父亲说 点击发送
    sendBtn = (newVal) => {
        let { fatherlist } = this.state
        fatherlist.push(newVal)
        console.log(fatherlist)
        this.setState({
            fatherlist
        })
    }
    // 爸爸给儿子 传递了一个函数（函数做为容器，来接收儿子要说的话）
    dogs = (sonList) => {
        console.log(sonList)
        let {SonList} = this.state
        SonList.push(sonList)
        this.setState({
            SonList
        })
    }
    render() {
        const { Val, fatherlist,SonList } = this.state
        console.log(SonList)
        return <div className='FatherBox'>
            <div className='InBox'>
                <input type="text" value={Val} onChange={(e) => { this.getFather(e.target.value) }} />
                <button onClick={() => { this.sendBtn(Val) }}>发送</button>
                <p>儿子说：</p>
                <div>
                    {
                        SonList.map((item,key)=>{
                            return <div key={key}>
                                {item}
                            </div>
                        })
                    }
                </div>
            </div>
            <Son said={fatherlist} funDog={this.dogs} />
        </div>
    }
}

export default Father