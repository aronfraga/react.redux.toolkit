import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import CharacterDetail from './components/CharacterDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/character/:id' element={<CharacterDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
