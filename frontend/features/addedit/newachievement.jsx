import React from 'react';

class NewAchievement extends React.Component {
  constructor(props){
    super(props);

    this.addAchievement = this.addAchievement.bind(this);
  }


  addAchievement(e){
    e.preventDefault();
    let achievement;
    let repeats = e.currentTarget.repeats.value;
    if (repeats === "none"){
      achievement = {
        name: e.currentTarget.name.value,
        date: new Date
      };
    } else {
      achievement = {
        name: e.currentTarget.name.value,
        date: new Date,
        repeats: repeats
      };
    }

    console.log("addAchievement", achievement);
    this.props.postNewAchievement(achievement);
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
              <label>
                <input name="repeats"
                  type="radio"
                  value="none"
                  defaultChecked="defaultChecked"/>
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
