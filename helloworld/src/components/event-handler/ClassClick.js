import React from 'react';

class ClassClick extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick(){
    console.log('button clicked from class component');
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click me(class component)</button>
      </div>
    );
  }
}

export default ClassClick;
