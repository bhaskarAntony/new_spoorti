import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import { TranslationHOC } from './helpers/TranslationHOC';
import Home from './pages/Home/Home';
import Food from './pages/food/Food';
import ViewFood from './pages/food/ViewFood';
import Room from './pages/Rooms/Room';
import Event from './pages/Events/Event';
import FoodCart from './pages/food/FoodCart';

function App() {
  
  return (
    <div className="App">
   
    <TranslationHOC>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/food' element={<Food/>}/>
      <Route path='/cart' element={<FoodCart/>}/>
      <Route path='/room' element={<Room/>}/>
      <Route path='/event' element={<Event/>}/>
      <Route path='/food/order/:id' element={<ViewFood/>}/>
    </Routes>
    </BrowserRouter>
    </TranslationHOC>
    </div>
  );
}

export default App;
