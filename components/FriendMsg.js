import React, { Component } from 'react'
import dateFormat from 'dateformat'

class FriendMsg extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
    <div>
      <div>
        <img src={this.props.friend.img}/>
      </div>
      <div>
        <div>
          <h3>{this.props.friend.name}</h3>
          <p>{dateFormat(this.props.msgs[0].dateTime, 'h:MM TT')}</p>
        </div>
      <p>{this.props.msgs[0].text}</p>
    </div>
  </div>
    )
  }
}

export default FriendMsg
