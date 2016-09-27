import React, { Component } from 'react'
import SearchBar from './SearchBar.js'
import FriendList from './FriendList'

class PreviousMsgs extends Component {

  constructor (props) {
    super(props)
    console.log(this.props.friends);
    console.log(this.props.msgs);
    this.state = {
      filterText: ''
    }
  }
  handleUserInput (filterText) {
    this.setState({
      filterText: filterText
    });
  }
  render () {
    let left = {
      float: 'left'
    }
    return (
    <div style={left}>
        <SearchBar filterText={this.state.filterText} onUserInput={this.handleUserInput.bind(this)}/>
        <FriendList friends={this.props.friends} msgs={this.props.msgs} filterText={this.state.filterText} currentFriendId={this.props.currentFriendId}
        changeCurrentFriend={this.props.changeCurrentFriend}/>
      </div>
    )
  }
}

export default PreviousMsgs
