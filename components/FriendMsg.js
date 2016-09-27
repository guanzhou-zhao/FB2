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
    return (
      <div
        style={this.props.friend.id === this.props.currentFriendId ? selected : null}
        onClick={this.handleClick.bind(this)}>
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
