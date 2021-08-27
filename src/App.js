import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { useEffect } from 'react';
import {getAuth, onAuthStateChanged} from 'firebase/auth';
import { useStateValue } from './StateProvider';

function App() {
  const [{user}, dispatch] = useStateValue();

  useEffect(() => {
    const auth = getAuth();
    auth.onAuthStateChanged( authUser => {
      console.log('THE USER IS ', authUser.email);

      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })

      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path = "/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/">
            <Header />
            <Home /> 
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
