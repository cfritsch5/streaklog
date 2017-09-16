import React from 'react';

class AddEdit extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      type: 'add',
      addAch: false
    };

    this.routines  = this.routines.bind(this);
    this.checkRtnAchv = this.checkRtnAchv.bind(this);
    this.newAchievement = this.newAchievement.bind(this);
    this.addAchievement = this.addAchievement.bind(this);
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
    Object.keys(this.props.routines).forEach((id)=>{
      routines.push(
        <div key={id}>
          <label >
            <input name={id}
              id={`checkBox${id}`}
              type="checkbox"
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
    let user_id = this.props.currentUser.id;
    this.props.postAchievement(streakId);
  }

  newAchievement(){
    const flipstate = ()=>(this.setState({addAch: !this.state.addAch}));
    if(this.state.addAch){
      return (
        <div className='addrtn'>
          <form onSubmit={this.addAchievement}>
            <input type="text"
              name='name'
              placeholder='Achievement Name'
              className=""
              />
            <button type='submit' />
            </form>
          </div>
        );
    }else{
      return(<button onClick={flipstate}>New Routine</button>);
    }
  }

  addAchievement(e){
    e.preventDefault();
    console.log("addAchievement", e.currentTarget.name.value);
  }

  render(){
    let type;
    switch (this.state.type) {
      case 'add_achievemt':
        type = <h1>add achievement</h1>;
        break;
      case 'add_routine':
        type = <h1>add routine</h1>;
        break;
      default:
      type = <h1>default add achievement</h1>;
    }
    let routines = this.routines();
    let addAch = this.newAchievement();
    return(
      <div className='addedit'>
        <div className='content'>
          <div className='add'>
            {addAch}
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
