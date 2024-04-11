import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import { TranslationHOC } from './helpers/TranslationHOC';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">
   
    <TranslationHOC>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
    </BrowserRouter>
    </TranslationHOC>
    </div>
  );
}

export default App;
