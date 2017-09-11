import React from 'react';

class Streaks extends React.Component{
  constructor(props){
    super(props);

    this.streaks = this.streaks.bind(this);
  }

  streaks() {
    let streaks = [];
    for(let i = 0; i < 5; i++){
      streaks.push(
        <div className='streak'>
          <h4>streaks {i}</h4>
        </div>
      );
    }
    return streaks;
  }

  render(){
    let streaks = this.streaks();
    return(
      <div className='streaks'>
          {streaks}
      </div>
    );
  }
}
export default Streaks;
