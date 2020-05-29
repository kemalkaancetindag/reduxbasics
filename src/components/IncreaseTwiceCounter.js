import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import {increaseTwiceCounter} from '../redux/actions/counterActions'
import { connect } from 'react-redux'

class IncreaseTwiceCounter extends Component {
    render() {
        return (
            <div>
                 <button onClick = {e=>{
                    this.props.dispatch(increaseTwiceCounter());
                }}>
                    İki Arttır
                </button>
                
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return {actions:bindActionCreators(increaseTwiceCounter,dispatch)}
}


export default connect(mapDispatchToProps)(IncreaseTwiceCounter)