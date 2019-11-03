import React,{Component} from 'react'
import Son from './son'
import './css/say.css'

// 父向子传值 

// 父子关系
// 子父关系
// 兄弟关系
// 跨级关系
class Father extends Component{
    state = {
        fatherSay:'',
        fatherList:[]
    }
    // 获取inp值
    FatherChange = (eVal)=>{
        let inp = this.refs.inp.value
        console.log(inp)
        this.setState({
            fatherSay:inp
        })
    }
    // 点击 发送 爸爸说的话
    sendBtn = (say)=>{
        console.log(say)
        let {fatherList} = this.state
        // 取大inp值 push到空数组里
        fatherList.push(say)
        this.setState({
            fatherList
        })
        this.props.fun(fatherList)
    }
    render(){
        const {fatherSay} = this.state
        const {sanlist} = this.props
        console.log(this)
        return <div className='FatherBox'>
            <div>
                <input ref='inp' value={fatherSay} onChange={(ev)=>{this.FatherChange(ev.target.value)}} type="text"/>
                <button onClick={()=>{this.sendBtn(fatherSay)}}>发送</button>
                <div>儿子对爸爸说：
                    <p>
                        {
                           sanlist.map((item,key)=>{
                               return <div>
                                   {item}
                               </div>
                           }) 
                        }
                    </p>
                </div>
            </div>
        </div>
    }
}
export default Father