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
        <div className='add-new'>
          <form onSubmit={this.addAchievement}>
            <input type="text"
              name='name'
              placeholder='Achievement Name'
              className=""
              />
            <button type='submit'>Success!</button>
            </form>
          </div>
        );
    }else{
      return(<button onClick={flipstate}>New Achievement</button>);
    }
  }

  addAchievement(e){
    e.preventDefault();
    console.log("addAchievement", e.currentTarget.name.value);
    this.props.postNewAchievement(e.currentTarget.name.value);
  }

  render(){
    let newAchievement = this.newAchievement();
    return(
      <div>
        {newAchievement}
      </div>
    );
  }
}

export default NewAchievement;
