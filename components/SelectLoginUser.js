import React, { Component } from 'react'

class SelectLoginUser extends Component {

  constructor (props) {
    super(props)
  }
  handleClick (userId) {
    return () => {
      this.props.changeLoinUser(userId)
    }
  }
  render () {
    let left = {
      display: 'inline-box',
      float: 'left'
    }
    return (
      <div>
        {this.props.allFriends.map((f, index) => {
          return (
            <div style={left} key={index} onClick={this.handleClick(f.id)}>
              <img
                style={f.id === this.props.whoIam ? {border: '5px solid #6D84B4'} : null}
                src={f.img}/>
            </div>
          )
        })}
      </div>
    )
  }
}

export default SelectLoginUser
