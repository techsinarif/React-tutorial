import React from 'react';
import './App.css';
import Counter from './components/state-example/Counter';
import Userone from './components/props-example/Userone';
import Usertwo from './components/props-example/Usertwo';
import FuncClick from './components/event-handler/FuncClick';
import ClassClick from './components/event-handler/ClassClick';

function App() {
  return (
    <div className="App">
      <h1>Techs'n Arif Tutorials</h1>
      <FuncClick />
      <ClassClick />
      {/* <Userone firstName="Bala" lastName="Subramaniyan"/>
      <Usertwo firstName="Abdul" lastName="Wahab"/> */}
      {/* <Counter /> */}
    </div>
  );
}

export default App;
