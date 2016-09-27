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
          img: 'http://placekitten.com/50/50',
          name: 'Ben'
        },
        {
          id: 2,
          img: 'http://placekitten.com/50/50',
          name: 'Jock'
        },
        {
          id: 3,
          img: 'http://placekitten.com/50/50',
          name: 'Peter'
        },
        {
          id: 4,
          img: 'http://placekitten.com/50/50',
          name: 'Lisa'
        },
        {
          id: 5,
          img: 'http://placekitten.com/50/50',
          name: 'Brady'
        }
      ],
      msgs: [
        {
          dateTime: new Date(2016, 9, 27, 7, 0),
          text: "Hey, what's happening?",
          from: 1,
          to: 2
        },
        {
          dateTime: new Date(2016, 9, 27, 7, 10),
          text: " Who is this?",
          from: 2,
          to: 1
        },
        {
          dateTime: new Date(2016, 9, 27, 7, 20),
          text: "It's Ben!",
          from: 2,
          to: 1
        },
        {
          dateTime: new Date(2016, 9, 27, 7, 30),
          text: "Ben who?",
          from: 1,
          to: 2
        },
        {
          dateTime: new Date(2016, 9, 27, 7, 40),
          text: "Ben, your pair programmer!",
          from: 2,
          to: 1
        },
        {
          dateTime: new Date(2016, 9, 27, 7, 50),
          text: "OH HEY BEN!!!!!!!!!!!!! Nice to hear from you! How's your day going buddy!",
          from: 1,
          to: 2
        },
        {
          dateTime: new Date(2016, 9, 27, 7, 0),
          text: "Hey, what's happening?",
          from: 3,
          to: 4
        },
        {
          dateTime: new Date(),
          text: "Hey, what's happening?",
          from: 5,
          to: 1
        }
      ],
      whoIam: 2,
      currentFriend: 1
    }
  }

  render () {
    var msgsIsend = this.state.msgs.filter((f) => {return f.from === this.state.whoIam && f.to === this.state.currentFriend})
    var msgsIrecived = this.state.msgs.filter((f) => {return f.to === this.state.whoIam && f.from === this.state.currentFriend})
    var myData = this.state.friends.filter((f) => {return f.id === this.state.whoIam})[0]
    var currentFriendData = this.state.friends.filter((f) => {return f.id === this.state.currentFriend})[0]

    return (
      <div>
        <CurrentMsgs myData={myData} currentFriendData={currentFriendData} msgsIrecived={msgsIrecived} msgsIsend={msgsIsend}/>
      </div>

    )
  }

}

// <PreviousMsgs friends={this.state.friends} msgs={this.state.msgs}/>
export default App
