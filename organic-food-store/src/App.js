import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Home from './components/pages/Home';

function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <Switch>
        <Route path='/home' component={Home}></Route>
        
      </Switch>
    </Router>
  );
}

export default App;
