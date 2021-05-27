import React from 'react';
// import Welcome from './components/Welcome';
// import Invite from './components/Invite';
import Userone from './components/props-example/Userone';
import './App.css';
import Usertwo from './components/props-example/Usertwo';

function App() {
  return (
    <div className="App">
      {/* <Welcome /> */}
      {/* <Invite /> */}
      <h1>Functional Component Example</h1>
      <Userone firstName="Abdul" lastName="Wahab" />
      <Userone firstName="Bala" lastName="Subramaniyan">
        <p>Child element in functional component</p>
      </Userone>
      <h1>Class Component Example</h1>
      <Usertwo firstName="Sarathy" lastName="Chander" />
      <Usertwo firstName="Harish" lastName="Murugesan" />
    </div>
  );
}

export default App;
