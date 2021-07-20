import Footer from './components/footer';
import Home from './pages/Home';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './components/navbar';
import Products from './pages/Products/Products';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Navbar />
          <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/products' component={Products}/>
          <Redirect to='/'/>
          </Switch>
          </BrowserRouter>
    <Footer />
    </div>
  );
}

export default App;
