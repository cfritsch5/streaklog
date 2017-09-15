import React from 'react';

class AddEdit extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      type: 'add',
      addAch: false
    };

    this.routines  = this.routines.bind(this);
    // this.checkRtnAchv = this.checkRtnAchv.bind(this);
    // this.newRoutine = this.newRoutine.bind(this);
    this.newAchievement = this.newAchievement.bind(this);
    this.addAchievement = this.addAchievement.bind(this);
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

  newAchievement(){
    const flipstate = ()=>(this.setState({addAch: !this.state.addAch}));
    if(this.state.addAch){
      console.log(this.state.addAch);
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
    // console.log("addAchievement", e.currentTarget.name.value);
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
