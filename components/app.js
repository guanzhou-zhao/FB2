import React, { Component } from 'react'
import PreviousMsgs from './PreviousMsgs'
import CurrentMsgs from './CurrentMsgs'
import SelectLoginUser from './SelectLoginUser'
import _ from 'lodash'
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
    this.state.msgs.push({dateTime: new Date(), text: text, from: fromId, to: toId})
    this.setState({msgs: this.state.msgs})
  }
  changeCurrentFriend(friendId) {
    this.setState({currentFriend: friendId})
  }
  changeLoinUser(userId) {
    this.setState({whoIam: userId})
  }
  render () {
    var msgsIsend = this.state.msgs.filter((f) => {return f.from === this.state.whoIam && f.to === this.state.currentFriend})
    var msgsIrecived = this.state.msgs.filter((f) => {return f.to === this.state.whoIam && f.from === this.state.currentFriend})
    var myData = this.state.friends.filter((f) => {return f.id === this.state.whoIam})[0]
    var currentFriendData = this.state.friends.filter((f) => {return f.id === this.state.currentFriend})[0]

    var myMsgsDetails = msgsIsend.map((m) => {
      return {
        img: myData.img,
        name: myData.name,
        text: m.text,
        dateTime: m.dateTime
      }
    })
    var receivedMsgsDetails = msgsIrecived.map((m) => {
      return {
        img: currentFriendData.img,
        name: currentFriendData.name,
        text: m.text,
        dateTime: m.dateTime
      }
    })
    var tempAllMsgs = _.concat(myMsgsDetails, receivedMsgsDetails)
    var allMsgs = _.sortBy(tempAllMsgs, (m) => { return m.dateTime})
    var clear = {}
    return (
      <div>
        <SelectLoginUser
          allFriends={this.state.friends}
          changeLoinUser={this.changeLoinUser.bind(this)}
          whoIam={this.state.whoIam}
        />
        <div style={{clear: 'both'}}>
          <PreviousMsgs
            friends={this.state.friends}
            msgs={this.state.msgs}
            currentFriendId={currentFriendData.id}
            whoIam={this.state.whoIam}
            changeCurrentFriend={this.changeCurrentFriend.bind(this)}
          />
          <CurrentMsgs
            myData={myData}
            currentFriendData={currentFriendData}
            allMsgs={allMsgs}
            addMsg={this.addMsg.bind(this)}
          />
        </div>
      </div>

    )
  }

}

export default App
