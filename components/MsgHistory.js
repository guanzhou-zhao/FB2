import React, { Component } from 'react'
import MsgRow from './MsgRow'
import _ from 'lodash'

class MsgHistory extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    var myMsgsDetails = this.props.msgsIsend.map((m) => {
      return {
        img: this.props.myData.img,
        name: this.props.myData.name,
        text: m.text,
        dateTime: m.dateTime
      }
    })
    var receivedMsgsDetails = this.props.msgsIrecived.map((m) => {
      return {
        img: this.props.currentFriendData.img,
        name: this.props.currentFriendData.name,
        text: m.text,
        dateTime: m.dateTime
      }
    })
    var tempAllMsgs = _.concat(myMsgsDetails, receivedMsgsDetails)
    console.log('tempAllMsgs', tempAllMsgs);
    var allMsgs = _.sortBy(tempAllMsgs, (m) => { return m.dateTime})
    console.log('allMsgs', allMsgs);
    return (
      <div>
        {allMsgs.map((msg, index) => {
          return <MsgRow key={index} msg={msg} />
        })}
      </div>
      )
  }

}

export default MsgHistory


// <MsgHistory myData={this.props.myData} currentFriendData={this.props.currentFriendData} msgsIrecived={this.props.msgsIrecived} msgsIsend={this.props.msgsIsend}/>
