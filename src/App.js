import { BrowserRouter, Route } from 'react-router-dom'

import Home from './pages/Home';
import Navbar from './components/Navbar'

import './App.css';
import MovieContext from './contexts/MovieContext';

function App() {
  return (
    <div className="App">
      <MovieContext>
      <BrowserRouter>
        <Navbar />
        <Route exact path="/">
          <Home />
        </Route>
      </BrowserRouter>
      </MovieContext>
    </div>
  );
}

export default App;
