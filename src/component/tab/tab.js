import React, { Component } from 'react'
import './css/tab.css'
class Tab extends Component {
    // 设置仓库数据
    state = {
        list: [
            {
                title: '大熊猫',
                items: [
                    {
                        name: '今天日考谁没成才？',
                        ans: '赵洋'
                    }
                ]
            },
            {
                title: '大龙虾',
                items: [
                    {
                        name: '今天日考谁没成才？',
                        ans: '李正旺'
                    }
                ]

            },
            {
                title: '碧根果',
                items: [
                    {
                        name: '今天日考谁没成才？',
                        ans: '李旺财'
                    }
                ]
            },
            {
                title: '开心果',
                items: [
                    {
                        name: '今天日考谁没成才？',
                        ans: '财旺旺'
                    }
                ]
            },
            {
                title: '癞蛤蟆',
                items:[
                    {
                        name:'今天日考谁没成才？',
                        ans:'旺旺财'
                    }
                ] 
            }
        ],
        isNow: 0,
        newList:null
    }
    // 点击切换样式  key为点击当前项拿到的索引值 
    activeCli = (key,item) => {
        // 更新isNow  让isNow和当前点击项的索引相等
        // item 点击获取到的当前项 （当前项为一个数组）
        this.setState({
            isNow: key,
            newList:item
        })
    }
    render() {
        console.log(this)
        const { list, isNow,newList} = this.state
        const newArr = newList===null?list[0].items:newList
        return <div>
            <div className='tabBox'>
                {
                    list.map((item, key) => {
                        console.log(item)
                        return <div onClick={() => { this.activeCli(key,item.items) }} className={['titlebox', isNow === key ? 'active' : ''].join(' ')} key={key}>
                            {item.title}
                        </div>
                    })
                }
            </div>
            <div>
                {
                    newArr.map((list, index) => {
                        return <div key={index}>
                            <p>{list.name}</p>
                            <p>{list.ans}</p>
                        </div>
                    })
                }
            </div>
        </div>
    }
}
export default Tab