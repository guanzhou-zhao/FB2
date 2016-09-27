import React, { Component } from 'react'

class MsgInput extends Component {

  constructor (props) {
    super(props)
  }
  handleChange () {
    console.log('msgInput');
    this.props.addMsg(
      this.props.fromId,
      this.props.toId,
      this.refs.textInput.value
    )
  }

  render () {
    return (
      <div>
        <input type="text" ref="textInput" name="MsgInput"/>
        <input onClick={this.handleChange.bind(this)} type="submit" value="Reply"/>
      </div>
    )
  }

}
export default MsgInput
