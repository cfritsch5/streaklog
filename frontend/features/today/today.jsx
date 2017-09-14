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

  render(){
    let achvs = this.renderAchievemets();
    return(
      <div className='today'>
          <h1>today</h1>
          {achvs}
      </div>
    );
  }
}
export default Today;
