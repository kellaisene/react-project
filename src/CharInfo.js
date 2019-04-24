import React, { Component } from 'react';

class CharInfo extends Component {
  constructor(props){
    super(props);
    this.state = {
      expanded: false
    }
    this.expandInfo = this.expandInfo.bind(this)
    this.closeInfo = this.closeInfo.bind(this)

  }

  expandInfo() {
    this.setState({ expanded: !this.state.expanded })
  }

  closeInfo() {
    this.setState({ expanded: !this.state.expanded })
  }
  render() {
    const info = this.props.charInfo;
    if(!this.state.expanded) {
      return <button className="btn button-info" onClick={this.expandInfo}>Show Info</button>
    }

    return (
      <div>
        <button onClick={this.closeInfo}>Hide Info</button>
        <ul>
          <h2>Gender: {info.gender}</h2>
          <h2>Name: {info.name}</h2>
          <h2>Birth Year: {info.birth_year}</h2>
          <h2>Eye Color: {info.eye_color}</h2>
        </ul>
      </div>
    )
  }
}

export default CharInfo;