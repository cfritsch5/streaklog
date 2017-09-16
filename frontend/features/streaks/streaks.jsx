import React from 'react';

class Streaks extends React.Component{
  constructor(props){
    super(props);
    this.streaks = this.streaks.bind(this);
  }

  componentWillMount(){
    // console.log("mount streaks");
    if (this.props.loggedIn){
      // console.log("loggedIn");
      this.props.getAchvsAndRoutines();
    }
  }

  componentWillReceiveProps(nextProps){
    // console.log("next");
    if (nextProps.loggedIn && !this.props.loggedIn){
      // console.log("loggedIn");
      this.props.getAchvsAndRoutines();
    }
  }

  streaks() {
    let streaks = [];
    // streaks = Object.keys(this.props.streaks).map((id)=>{
    //   let streak = this.props.streaks[id];
    //   let achv = this.props.achievements[streak.achievement];
    //   let rtn = this.props.routines[streak.routine];
    //   // console.log(achv);
    //   // let bars = Object.keys(streak.days).map((day)=>{
    //   //   let status = streak.days[day] > 0 ? "checked" : "unchecked";
    //   //   return (
    //   //     <div key={day} className={status}></div>
    //   //   );
    //   // });
    //   let colors = ['red','orange','yellow','green','blue','purple'];
    //     return (<div key={id} className='streak'
    //      style={{
    //        width: `${streak.currentStreak*10}%`,
    //        background: colors[id]
    //      }}>
    //       <h4>{achv.name}</h4>
    //     </div>);
    // });
    // console.log(streaks);
    return streaks;
  }

  render(){
    // console.log("streaks render");
    let streaks = this.streaks();
    return(
      <div className='streaks'>
          {streaks}
      </div>
    );
  }
}
export default Streaks;
