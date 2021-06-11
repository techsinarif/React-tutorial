import React from 'react';

class Counter extends React.Component {
  state = {
    count: 0
  };

  increaseCount = () => {
    const {count} = this.state;
    this.setState({
      count: count + 1
    }, () => {
      console.log(`count state updated ${count}`);
    })
  };

  render(){
    const {count} = this.state;
    return (
      <div>
        <h2>Reactjs State Example</h2>
        <h4>Button was clicked {count} times</h4>
        <button onClick={this.increaseCount}>Click me!</button>
      </div>
    )
  }
}

export default Counter;