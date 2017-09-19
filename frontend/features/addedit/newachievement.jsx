import React from 'react';
// import NewRoutineContainer from 'newroutineContainer';

class NewAchievement extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      addAch: false,
      addRtn: false
    };
    // this.newAchievement = this.newAchievement.bind(this);
    this.newRoutine = this.newRoutine.bind(this);
    this.addAchievement = this.addAchievement.bind(this);
    this.addRoutine = this.addRoutine.bind(this);
    this.flipstate = this.flipstate.bind(this);
  }

  flipstate(stateSlice) {
    // this.setState({[stateSlice]: !this.state[stateSlice]});
  }
  //
  // newAchievement(){
  //   if(this.state.addAch){
  //     return (
  //       <div className='add-new'>
  //         <form onSubmit={this.addAchievement}>
  //           <input type="text"
  //             name='name'
  //             placeholder='Achievement Name'
  //             className=""
  //             />
  //           <label>
  //             Routine?
  //             <label> Yes
  //               <input type="radio" name="routine" value="no"/>
  //             </label>
  //             <label> No
  //               <input type="radio" name="routine" value="yes"/>
  //             </label>
  //           </label>
  //
  //           <button type='submit'>Success!</button>
  //           </form>
  //         </div>
  //       );
  //   }else{
  //     return(<button onClick={()=>this.flipstate('addAch')}>
  // New Achievement</button>);
  //   }
  // }

  addAchievement(e){
    // e.preventDefault();
    console.log("addAchievement", e.currentTarget.name.value);
    this.props.postNewAchievement(e.currentTarget.name.value);
    // this.flipstate('addAch');
  }

  newRoutine(){
    // if(this.state.addRtn){
    //   return(
    //     <div>
    //       <input name="routineName" placeholder="routineName" type="text"/>
    //       <label>
    //         <input type="radio" value="daily" checked="checked"/>
    //         daily
    //       </label>
    //     </div>
    //   );
    // }else{
    //   return <button onClick={()=>(this.flipstate('addRtn'))}>
    //     New Routine
    //   </button>;
    // }
  }

  addRoutine(e){
    // console.log("addRoutine", e.currentTarget.name.value);
    // // this.props.postNewAchievement(e.currentTarget.name.value);
    // this.flipstate('addRtn');
  }

  render(){
      return (
        <div className='add-new'>
          <form onSubmit={this.addAchievement}>
            <input type="text"
              name='name'
              placeholder='Achievement Name'
              className=""
              />
            <input type="text" name="hours" placeholder="hours" className="hours"/>
              <label>
                <input name="repeats" type="radio" value="none" defaultChecked="defaultChecked"/>
                non-routine
              </label>
              <label>
                <input name="repeats" type="radio" value="daily"/>
                daily
              </label>
              <label>
                <input name="repeats" type="radio" value="weekly"/>
                weekly
              </label>
            <button type='submit'>Yeah!</button>
            </form>
          </div>
        );
  }
}

export default NewAchievement;
