import { Route, BrowserRouter, Routes } from 'react-router-dom';

import './App.css';
import './pages/MainIndex';
import './styles/bootstrap.css';
import './styles/animate.css';

import MainIndex from './pages/MainIndex';
import Blog from './pages/Blog';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainIndex />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
