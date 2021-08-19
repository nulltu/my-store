import Footer from './components/footer';
import Home from './pages/Home';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './components/navbar';
import './app.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Redirect to='/' />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
