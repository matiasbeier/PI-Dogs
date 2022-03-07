import { Route } from 'react-router-dom';

import './App.css';

import Home from './components/Home/Home.jsx';
import PageInitial from './components/PageInitial/PageInitial.jsx';
import CreateDog from './components/CreateDog/CreateDog';
import DogDetail from './components/DogDetail/DogDetail';

function App() {
  return (
    <div className="App">
      <Route path={'/'} exact component={PageInitial} />
      <Route path={'/home'} exact component={Home} />
      <Route path={'/home/dog/create'} exact component={CreateDog} />
      <Route path={'/home/dog/:id/detail/'} exact component={DogDetail} />
    </div>
  );
}

export default App;
