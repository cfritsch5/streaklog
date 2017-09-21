import React from 'react';

class Today extends React.Component{
  constructor(props){
    super(props);
    this.renderAchievemets = this. renderAchievemets.bind(this);
  }

  renderAchievemets() {
    return(
      <ul>
        {Object.keys(this.props.achievements).map((id) => (
          <li key={id} >
            {this.props.achievements[id].name}
          </li>
        ))}
      </ul>
    );
  }

  encouragement(){
    const length = Object.keys(this.props.achievements).length;
    // console.log(length,"length");
    switch (true) {
      case (length >= 5):
        return "Stellar!";
      case (length >= 4):
        return "You Are Rocking It!";
      case (length >= 3):
        return "Look At You Go!";
      case (length >= 2):
        return "On A Roll!";
      case (length >= 1):
        return "Nice Job Keep 'Em Coming!";
      default:
        return "Do your Best!";
    }
  }

  render(){
    let achvs = this.renderAchievemets();
    let encouragement = this.encouragement();
    return(
      <div className='today'>
        <div className="content">
          <h1>{encouragement}</h1>
          {achvs}
        </div>
      </div>
    );
  }
}
export default Today;
