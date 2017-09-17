import React from 'react';
import NewAchievementContainer from './newachievement_container';

class AddEdit extends React.Component{
  constructor(props){
    super(props);

    this.routines  = this.routines.bind(this);
    this.checkRtnAchv = this.checkRtnAchv.bind(this);
    this.setRoutinesState = this.setRoutinesState.bind(this);
  }

  componentWillMount(){
    this.setRoutinesState(this.props.routines,
      this.props.achievements,
      this.props.streaks
    );
  }
  componentWillReceiveProps(nextProps){
    this.setRoutinesState(nextProps.routines,
      nextProps.achievements,
      nextProps.streaks
    );
  }

  setRoutinesState(routines, achievements, streaks){
    let routinesState = {};
    let boo = false;
      Object.keys(routines).forEach((id)=>{
        boo = false;
        if (streaks[routines[id].streak_id]){
          let streak = streaks[routines[id].streak_id];
          if(achievements[streak.achievement]){
            let achv = achievements[streak.achievement];
            boo = true;
          }
        }
        routinesState[id] = boo;
      });

    this.setState({routinesState});
  }

  routines(){
    let routines = [];
    let checked = 'off';
    Object.keys(this.props.routines).forEach((id)=>{
      checked = this.state.routinesState[id] ? 'checked' : '';
      routines.push(
        <div key={id}>
          <label >
            <input name={id}
              id={`checkBox${id}`}
              type="checkbox"
              checked={checked}
              disabled={this.state.routinesState[id]}
              onChange={this.checkRtnAchv}
              />

            {this.props.routines[id].name}
          </label>
        </div>
      );
    });
    return routines;
  }

  checkRtnAchv(e){
    let id = e.currentTarget.name;
    let routinesState = this.state.routinesState;
    routinesState[id] = true;
    this.setState({routinesState});
    let streakId = this.props.routines[id].streak_id;
    this.props.postAchievement(streakId);
  }

  render(){
    let routines = this.routines();
    return(
      <div className='addedit'>
        <div className='content'>
          <div className='add'>
            <NewAchievementContainer/>
          </div>
          <div className='routines'>
            {routines}
          </div>
        </div>
      </div>
    );
  }
}

export default AddEdit;
