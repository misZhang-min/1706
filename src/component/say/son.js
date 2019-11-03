import React,{Component} from 'react'
import './css/say.css'
class Son extends Component{
    state = {
        sonSay:'',
        sonlist:[]
    }
    sonTalck = (talk)=>{
        console.log(talk)
        let {sonlist} = this.state
        sonlist.push(this.refs.sonInp.value)
        this.setState({
            sonlist
        })
        this.props.sonFun(sonlist,'son')
    }
    render(){
        console.log(this)
        const {saylist,sonSay} = this.props
        return <div className='SonBox'>
            <input ref='sonInp' value={sonSay} onChange={(e)=>{this.sonTalck(e.target.value)}} type="text"/>
            <button>发送</button>
            <div>
                <span>爸爸对儿子说：</span> 
                {
                    saylist.map((item,key)=>{
                        return <p key={key}>
                            {item}
                        </p>
                    })
                }
            </div>
        </div>
    }
}
export default Son