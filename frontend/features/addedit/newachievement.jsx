import React from 'react';

class NewAchievement extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      addAch: false
    };
    this.newAchievement = this.newAchievement.bind(this);
    this.addAchievement = this.addAchievement.bind(this);
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

  }
}

export default NewAchievement;
