import { BrowserRouter, Route } from 'react-router-dom'

import Home from './pages/Home';
import Navbar from './components/Navbar'

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Route exact path="/">
          <Home />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
