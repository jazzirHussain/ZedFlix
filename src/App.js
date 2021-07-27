import NavBar from './Components/NavBar/NavBar'
import './App.css'
import Banner from './Components/Banner/Banner'

import {Switch,Route, Link} from "react-router-dom";
import Movie from './Pages/Specific Movie/Movie'
import Home from './Pages/Home/Home';
import Player from './Components/Player/Player';
import Tv from './Pages/Specific Movie/Tv';
import Epsiodes from './Pages/Episodes/Epsiodes';
import Episode from './Pages/Specific Movie/Episode';
import Notfound_404 from './Pages/404/Notfound_404';

function App() {
  return (
    <div className="app">
      <Switch>
      <Route path='/' exact>
      <Home></Home>
      </Route>
      <Route path='/movies'>
      <Movie></Movie>
      </Route>
      <Route path='/tv'>
      <Tv></Tv>
      </Route>
      <Route path='/play_movie'>
      <Player></Player>
      </Route>
      <Route path='/play_tv'>
      <Player isTv></Player>
      </Route>
      <Route path='/episodes'>
        <Epsiodes></Epsiodes>
      </Route>
      <Route path='/episode/:id/:id/:id' exact >
      <Episode></Episode>
      </Route>
  
      <Route path='/404'>
      <Notfound_404></Notfound_404>
      </Route>

      </Switch>
      
  </div>
  );

}

export default App;



