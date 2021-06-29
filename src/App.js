import logo from './logo.svg';
import FormHTML from './FormHTML';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ThankYou from './ThankYou';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <FormHTML />
          </Route>
          <Route exact path="/thankyou">
            <ThankYou/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
