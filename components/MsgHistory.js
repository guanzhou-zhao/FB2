import React, { Component } from 'react'
import MsgRow from './MsgRow'

class MsgHistory extends Component {

  constructor (props) {
    super(props)
  }

  render () {

    return (
      <div>
        {this.props.allMsgs.map((msg, index) => {
          return <MsgRow key={index} msg={msg} />
        })}
      </div>
      )
  }

}

export default MsgHistory


// <MsgHistory myData={this.props.myData} currentFriendData={this.props.currentFriendData} msgsIrecived={this.props.msgsIrecived} msgsIsend={this.props.msgsIsend}/>
