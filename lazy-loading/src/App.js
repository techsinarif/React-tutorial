import React, {Suspense} from 'react';
import './App.css';
import {Route, BrowserRouter as Router, Switch, Link} from 'react-router-dom';
// import RouteLazyComp1 from './components/route-lazy-comp1';
// import RouteLazyComp2 from './components/route-lazy-comp2';
// import LazyComponent from './components/lazy-load-comp';

const LazyComponent = React.lazy(() => import('./components/lazy-load-comp'));
const RouteLazyComp1 = React.lazy(() => import('./components/route-lazy-comp1'));
const RouteLazyComp2 = React.lazy(() => import('./components/route-lazy-comp2'));

function App() {
  return (
    <div className="App">
      <Router>
        <h1>Welcome to Techs'n Arif</h1>
        <p>We will learn about how to load components dynamically.</p>
        <Suspense fallback={<div>Loading...</div>}>
          <LazyComponent />
        </Suspense>
        
        <ul className="nav-list">
          <li><Link to="/comp1">component 1</Link></li>
          <li><Link to="/comp2">component 2</Link></li>
        </ul>

        <Switch>
          <Suspense fallback={<div>Loading...</div>}>
            <Route path="/comp1" component={RouteLazyComp1} />
            <Route path="/comp2" component={RouteLazyComp2} />
          </Suspense>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
