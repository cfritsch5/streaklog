import React from 'react';

class AddEdit extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      type: 'add'
    };
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

    return(
      <div className='addedit'>
        {type}
      </div>
    );
  }
}

export default AddEdit;
