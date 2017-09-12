import React from 'react';

class Today extends React.Component{
  constructor(props){
    super(props);
    this.renderAchievemets = this. renderAchievemets.bind(this);
  }

  renderAchievemets() {
    return(
      <ul>
        {this.props.achievements.map((achievement, i) => (
          <li key={`achievement-${i}`}>
            {achievement}
          </li>
        ))}
      </ul>
    );
  }

  render(){
    return(
      <div className='today'>
          <h1>today</h1>
          {'this.renderAchievemets()'}
      </div>
    );
  }
}
export default Today;
