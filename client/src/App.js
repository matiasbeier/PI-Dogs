import { Route } from 'react-router-dom';

import './App.css';

import Home from './components/Home/Home.jsx';
import PageInitial from './components/PageInitial/PageInitial.jsx';

function App() {
  return (
    <div className="App">
      <h1>Henry Dogs</h1>
      <Route path={'/'} exact component={PageInitial} />
      <Route path={'/home'} exact component={Home} />
    </div>
  );
}

export default App;
