import React from 'react';

class AddEdit extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      type: 'add'
    };

    this.routines  = this.routines.bind(this);
    // this.checkRtnAchv = this.checkRtnAchv.bind(this);
    // this.newRoutine = this.newRoutine.bind(this);
    // this.newAchievement = this.newAchievement.bind(this);
  }

  routines(){
    const routines = Object.keys(this.props.routines).map((id)=>(
      <div key={id}>
          <label onClick={this.checkRtnAchv}>
            <input id="checkBox" type="checkbox"/>
            {this.props.routines[id].name}
          </label>
      </div>
    ));
    return routines;
  }

  // newRoutine(){
  //
  // }
  //
  // newAchievement(){
  //
  // }



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

    return(
      <div className='addedit'>
        <div className='add'>
          <button onClick={this.newRoutine}>New Routine</button>
          <button onClick={this.newAchievement}>New Achievement</button>
        </div>
        <div className='routines'>
          {routines}
        </div>
      </div>
    );
  }
}

export default AddEdit;
