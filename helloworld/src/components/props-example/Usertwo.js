import React from 'react';

class Usertwo extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h4>Welcome Mr.{this.props.firstName} {this.props.lastName}</h4>
      </div>
    )
  }
}

export default Usertwo;