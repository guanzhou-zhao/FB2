import React, { Component } from 'react'
import PreviousMsgs from './PreviousMsgs'
import CurrentMsgs from './CurrentMsgs'

class App extends Component {

  constructor (props) {
    super(props)
    this.state = {
      friends: [
        {
          id: 1,
          img: 'https://avatars1.githubusercontent.com/u/19282953?v=3&s=120',
          name: 'Ben'
        },
        {
          id: 2,
          img: 'https://avatars1.githubusercontent.com/u/19864300?v=3&s=120',
          name: 'Jock'
        },
        {
          id: 3,
          img: 'https://avatars0.githubusercontent.com/u/3063500?v=3&s=120',
          name: 'Peter'
        },
        {
          id: 4,
          img: 'https://avatars3.githubusercontent.com/u/20085843?v=3&s=120',
          name: 'Lisa'
        },
        {
          id: 5,
          img: 'https://avatars3.githubusercontent.com/u/20106637?v=3&s=120',
          name: 'Brady'
        }
      ],
      msgs: [
        {
          dateTime: new Date(2016, 8, 27, 7, 0),
          text: "Hey, what's happening?",
          from: 1,
          to: 2
        },
        {
          dateTime: new Date(2016, 8, 27, 7, 10),
          text: " Who is this?",
          from: 2,
          to: 1
        },
        {
          dateTime: new Date(2016, 8, 27, 7, 20),
          text: "It's Ben!",
          from: 2,
          to: 1
        },
        {
          dateTime: new Date(2016, 8, 27, 7, 30),
          text: "Ben who?",
          from: 1,
          to: 2
        },
        {
          dateTime: new Date(2016, 8, 27, 7, 40),
          text: "Ben, your pair programmer!",
          from: 2,
          to: 1
        },
        {
          dateTime: new Date(2016, 8, 27, 7, 50),
          text: "OH HEY BEN!!!!!!!!!!!!! Nice to hear from you! How's your day going buddy!",
          from: 1,
          to: 2
        },
        {
          dateTime: new Date(2016, 8, 27, 7, 0),
          text: "Hey, what's happening?",
          from: 3,
          to: 2
        },
        {
          dateTime: new Date(),
          text: "Hey, what's happening?",
          from: 5,
          to: 2
        }
      ],
      whoIam: 2,
      currentFriend: 1
    }
  }
  addMsg (fromId, toId, text) {
    console.log('fromId, toId, text', fromId, toId, text);
    this.state.msgs.push({dateTime: new Date(), text: text, from: fromId, to: toId})
    this.setState({msgs: this.state.msgs})
  }
  changeCurrentFriend(friendId) {
    this.setState({currentFriend: friendId})
  }
  render () {
    var msgsIsend = this.state.msgs.filter((f) => {return f.from === this.state.whoIam && f.to === this.state.currentFriend})
    var msgsIrecived = this.state.msgs.filter((f) => {return f.to === this.state.whoIam && f.from === this.state.currentFriend})
    var myData = this.state.friends.filter((f) => {return f.id === this.state.whoIam})[0]
    var currentFriendData = this.state.friends.filter((f) => {return f.id === this.state.currentFriend})[0]

    return (
      <div>
        <PreviousMsgs friends={this.state.friends} msgs={this.state.msgs} currentFriendId={currentFriendData.id}
        changeCurrentFriend={this.changeCurrentFriend.bind(this)}/>
        <CurrentMsgs myData={myData} currentFriendData={currentFriendData} msgsIrecived={msgsIrecived} msgsIsend={msgsIsend}
          addMsg={this.addMsg.bind(this)}
          />
      </div>

    )
  }

}

export default App
