import React from 'react';

class Usertwo extends React.Component {
  render() {
    console.log(this.props);
    const {firstName, lastName} = this.props;
    return (
      <div>
        <h4>Welcome Mr.{firstName} {lastName}</h4>
      </div>
    )
  }
}

export default Usertwo;