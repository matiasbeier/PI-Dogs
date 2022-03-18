import { Route } from 'react-router-dom';

import './App.css';

import Home from './components/Home/Home.jsx';
import PageInitial from './components/PageInitial/PageInitial.jsx';
import CreateDog from './components/CreateDog/CreateDog';
import DogDetail from './components/DogDetail/DogDetail';
import EditDog from './components/EditDog/EditDog';

function App() {
  return (
    <div className="App">
      <Route path={'/'} exact component={PageInitial} />
      <Route path={'/home'} exact component={Home} />
      <Route path={'/home/dog/create'} exact component={CreateDog} />
      <Route path={'/home/dog/:id/detail/'} exact component={DogDetail} />
      <Route path={'/home/dog/edit/:id'} exact component={EditDog} />
    </div>
  );
}

export default App;
