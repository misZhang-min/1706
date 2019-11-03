import React,{Component} from 'react'
import Childs from './child'
import './css/add.css'
// 创建组件的两种形式：  函数式组件   类组件

// 函数式组件： 1、无状态  2、有属性  3、有返回值

// 类组件： 1、有状态  2、有属性  3、有返回值

// 创建组件名称  首字母大写（特殊记忆）
// 函数式组件
function FunModule(props){
    console.log(props)
    return <div>
         我是函数式组件
         {props.name}
    </div>
}
// 类组件
class Child extends Component{
    render(){
        return <div>
            我是儿子
        </div>
    }
}
class ClaModule extends Component{
    constructor(props){
        super(props)
        console.log(this)
        console.log('初始化')
    }
    componentWillMount(){
        console.log('初始化--will')
    }
    // 默认状态
    static defaultProps = {
        title:'冯慧东你看啥'
    }
    //状态
    state = {
        name:'李源醒醒',
        list:[
            {}
        ]
    }
    // 实例期  四个生命周期执行
    render(){
        console.log('初始化--render')
        return <div className='father' onClick={()=>{
            // console.log('11')
            // this.state.name= '我是吴亦凡'
            // console.log(this.state.name)
            this.setState({
                name:'我叫吴亦凡'
            })
            }}>
            <div className='namebox'>{this.state.name}</div>
            {/* <img src={require('../../static/img/logo192.png')} alt=""/> */}
            {/* {this.props.title} */}
            {/* <FunModule name='董瑞吃龙虾了'/> */}
             {/* <Child /> */}
           <Childs name={this.state.name} />
        </div>
    }
    componentDidMount(){
        console.log('初始化-did')
    }

    shouldComponentUpdate(){
        console.log('should')
        return true
    }
    componentWillUpdate(){
        console.log('update')
    }
    componentDidUpdate(){
        console.log('didupdate')
    }
}


export default ClaModule
