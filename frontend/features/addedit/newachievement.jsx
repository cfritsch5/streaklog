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
          <form className="add-new-form" onSubmit={this.addAchievement}>
            <input type="text"
              name='name'
              placeholder='Achievement Name'
              className=""
              />
            <textarea placeholder="Description">

            </textarea>
            <div>
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
              </div>
              <button className="starbutton"
                type='submit'>
                <img className="star"
                  src="assets/starrbutton.png"/>
                <h1>Yeah!</h1>
              </button>
            </form>
        );
  }
}

export default NewAchievement;
