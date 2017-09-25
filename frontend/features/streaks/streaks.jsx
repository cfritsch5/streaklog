import React from 'react';

class Streaks extends React.Component{
  constructor(props){
    super(props);
    this.streaks = this.streaks.bind(this);
  }

  componentWillMount(){
    console.log("mount streaks", this.props.streaks);
    if (this.props.loggedIn){
      // console.log("loggedIn");
      this.props.getAchvsAndRoutines();
    }
  }

  componentWillReceiveProps(nextProps){
    console.log("next");
    if (nextProps.loggedIn && !this.props.loggedIn){
      // console.log("loggedIn");
      this.props.getAchvsAndRoutines();
    }
  }

  colors(){
    let l = Object.keys(this.props.streaks).length;
    let inc = 300/l;
    let colors = [];
    for(let i = 0 ; i < l ; i++){
      colors.push(`hsla(${i*inc}, 100%, 50%, 1)`);
    }
    console.log(colors);
    return colors;
  }

  streaks() {
    let streaks = [];
    // let colors = this.colors();
    let colors = ['red','orange','yellow','green','blue','purple'];
    let i = -1;
    let length = parseInt(150/Object.keys(this.props.streaks).length);
    streaks = Object.keys(this.props.streaks).map((id)=>{
      let streak = this.props.streaks[id];
      let achv = this.props.achievements[streak.achievement] || "blank";
      let rtn = this.props.routines[streak.routine];
      i++;
        return (
          <div key={id} className="streak-container">
            <div className='streak'
              style={{
                width: `${(streak.currentStreak*10)+ 10}%`,
                background: colors[i],
              }}>
              <h4 className="streak-title">{streak.name}</h4>
          </div>
          <div className="streak-num">
            <div className="onfire">
              <img className="onfire" src="assets/fire-icons-set.png"/>
              <h2 className="current-streak-num">{streak.currentStreak}</h2>
            </div>
          </div>
        </div>);
    });
    // console.log(streaks);
    return streaks;
  }

  render(){
    console.log("streaks render", this.props.streaks);
    let streaks = this.streaks();
    return(
      <div className='streaks'>
        {streaks}
      </div>
    );
  }
}
export default Streaks;
