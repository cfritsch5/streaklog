import React from 'react';

class NewRoutine extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      addRtn: false
    };

    // this.newAchievement = this.newAchievement.bind(this);
    // this.newRoutine = this.newRoutine.bind(this);
    // this.addAchievement = this.addAchievement.bind(this);
    this.addRoutine = this.addRoutine.bind(this);
    this.flipstate = this.flipstate.bind(this);
  }

  flipstate(stateSlice) {this.setState({[stateSlice]: !this.state[stateSlice]});}


  // addAchievement(e){
  //   // e.preventDefault();
  //   console.log("addAchievement", e.currentTarget.name.value);
  //   this.props.postNewAchievement(e.currentTarget.name.value);
  //   this.flipstate('addAch');
  // }

  // newRoutine(){
  //   if(this.state.addRtn){
  //     return(
  //       <div>
  //         <input name="routineName" type="text"/>
  //         <input type="radio" value="daily" checked="checked"/>
  //       </div>
  //     );
  //   }else{
  //     // this.flipstate('addRtn');
  //     return <button onClick={()=>(this.flipstate('addRtn'))}>
  //              New Routine
                // </button>;
  //   }
  // }

  addRoutine(e){
    console.log("addRoutine", e.currentTarget.name.value);
    // this.props.postNewAchievement(e.currentTarget.name.value);
    this.flipstate('addRtn');
  }

  render(){
    if(this.state.addRtn){
      return (
        <div className='add-new-routine'>
            <input type="text"
              name='name'
              placeholder='Achievement Name'
              className=""
              />
          </div>
        );
    }else{
      return(
        <button onClick={()=>(this.flipstate('addRtn'))}>
          Add Routine
        </button>
      );
    }
  }
}

export default NewRoutine;
