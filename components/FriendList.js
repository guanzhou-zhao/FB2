import React, { Component } from 'react'
import FriendMsg from './FriendMsg'

class FriendList extends Component {

  constructor (props) {
    super(props)
    console.log(this.props.friends)
    console.log(this.props.msgs)
    console.log(this.props.filterText);
  }
  render () {
    var filterResult = this.props.friends.filter((f) => {
      return f.name.indexOf(this.props.filterText) > -1
    })
    return (
      <div>
        {filterResult.map((f, index) => {return <FriendMsg friend={f} msgs={this.props.msgs} key={index}/>})}
      </div>
    )
  }
}

export default FriendList
