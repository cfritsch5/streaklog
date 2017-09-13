import React from 'react';

class Streaks extends React.Component{
  constructor(props){
    super(props);
    this.streaks = this.streaks.bind(this);
  }

  componentWillMount(){
    console.log("mount streaks");
    if (this.props.loggedIn){
      console.log("loggedIn");
      this.props.getAchvsAndRoutines();
    }
  }

  componentWillReceiveProps(nextProps){
    console.log("next");
    if (nextProps.loggedIn && !this.props.loggedIn){
      console.log("loggedIn");
      this.props.getAchvsAndRoutines();
    }
  }

  streaks() {
    let streaks = [];
    for(let i = 0; i < 5; i++){
      streaks.push(
        <div className='streak'>
          <h4>streaks {i}</h4>
        </div>
      );
    }
    return streaks;
  }

  render(){
    console.log("streaks render");
    let streaks = this.streaks();
    return(
      <div className='streaks'>
          {streaks}
      </div>
    );
  }
}
export default Streaks;
