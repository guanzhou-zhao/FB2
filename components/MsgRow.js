import React, { Component } from 'react'
import dateFormat from 'dateformat'
class MsgRow extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
        <div>
          <div>
            <img src={this.props.msg.img}/>
          </div>
          <div>
            <div>
              <h3>{this.props.msg.name}</h3>
              <p>{dateFormat(this.props.msg.dateTime, 'h:MM TT')}</p>
            </div>
          <p>{this.props.msg.text}</p>
        </div>
      </div>
    )
  }

}

export default MsgRow
