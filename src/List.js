import React, { Component } from 'react';

import CharInfo from './CharInfo.js';


class List extends Component {
  render() {
    const starPeople = this.props.starPeople;

    return (
      <div className="">
        {
          starPeople.map((people) => {
            console.log('PEEPS', people)
            return (
              <div key={people.url}>
                <h1 className="char-name">{people.name}</h1>
                <CharInfo charInfo={people}/>
              </div>
            )
          } )
        }
      </div>
    )
  }
}

export default List;