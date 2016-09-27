import React, { Component } from 'react'

class SearchBar extends Component {

  constructor (props) {
    super(props)
  }
  handleChange () {
    this.props.onUserInput(
      this.refs.filterTextInput.value
    );
  }
  render () {
    return (
      <div>
        <input type="text" ref="filterTextInput" name="searchName" placeholder="Search" onChange={this.handleChange.bind(this)}/>
      </div>
    )
  }

}

// /*<img src="http://www.clker.com/cliparts/e/v/A/R/K/t/transparent-magnifying-glass-md.png" />*/
// style={{height:10px}}

export default SearchBar
