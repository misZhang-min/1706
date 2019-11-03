import React, { Component } from 'react'
import Father from './father'
import Son from './son'
import './css/say.css'
class GrandFa extends Component {
    state = {
        say: [],
        sonsay: []
    }
    GrandFun = (says, type) => {
        console.log(says)
        if (type === 'son') {
            this.setState({
                sonsay: says
            })
            console.log(this.state.sonsay)
        } else {
            this.setState({
                say: says
            })
        }
    }
    render() {
        return <div className='grand'>
            <Father fun={this.GrandFun} sanlist={this.state.sonsay} />
            <Son saylist={this.state.say} sonFun={this.GrandFun} />
        </div>
    }
}
export default GrandFa
