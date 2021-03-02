import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';

import News from '../../page/News/News';
import Home from '../../page/Home/Home';
import Profile from '../../page/Profile/Profile';
import NotFound from '../../page/NotFound/NotFound';
import Login from '../../page/Login/Login';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div>
          <Switch>
            <Route exact path='/' render={() => <Home />} />
            <Route path='/news' component={ News } />
            <Route path='/profile' component={Profile} />
            <Route path='/login' component={Login} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
