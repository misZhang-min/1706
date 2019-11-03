import React,{Component} from 'react'
class Childs extends Component{
    render(){
        console.log(this)
        console.log(this.props.name)
        return <div onClick={()=>{console.log('我想改名字')}}>
            {/* 我是兄弟组件 */}
            {this.props.name}
        </div>
    }
    componentWillReceiveProps(){
        console.log('111')
    }
}
export default Childs