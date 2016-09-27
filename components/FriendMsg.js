import React, { Component } from 'react'
import dateFormat from 'dateformat'

class FriendMsg extends Component {

  constructor (props) {
    super(props)
  }
  handleClick () {
    this.props.changeCurrentFriend(this.props.friend.id)
  }
  render () {
    var selected = {
      backgroundColor: '#6D84B4'
    }
    var {friend, currentFriendId, latestMsg, sender} = this.props
    return (
      <div
        style={friend.id === currentFriendId ? selected : null}
        onClick={this.handleClick.bind(this)}>
        <div>
          <img src={friend.img}/>
        </div>
        <div>
          <div>
            <h3>{friend.name}</h3>
            <p>{latestMsg && dateFormat(latestMsg.dateTime, 'h:MM TT')}</p>
          </div>
          <p>{latestMsg ? `${sender}:  ${latestMsg.text}` : null}</p>
        </div>
      </div>
    )
  }
}

export default FriendMsg
