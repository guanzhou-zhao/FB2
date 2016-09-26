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
          dataTime: new Date(),
          text: "Hey, what's happening?",
          from: 1,
          to: 2
        },
        {
          dataTime: new Date(),
          text: "Hey, what's happening?",
          from: 3,
          to: 4
        },
        {
          dataTime: new Date(),
          text: "Hey, what's happening?",
          from: 5,
          to: 1
        }
      ]
    }
  }

  render () {
    return (
      <div>
        <h1>Welcome to {this.props.name}</h1>
        <PreviousMsgs friends={this.state.friends} msgs={this.state.msgs}/>
        <CurrentMsgs friends={this.state.friends} msgs={this.state.msgs}/>
      </div>

    )
  }

}

export default App
