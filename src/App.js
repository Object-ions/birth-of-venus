import { Route, Routes } from 'react-router-dom';
import './App.scss';
import NavBar from './layout/NavBar';
import Home from './components/Home';
import Interpretation from './components/Interpretation';
import Objectives from './components/Objectives';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/objectives" element={<Objectives />} />
          <Route path="/interpretation" element={<Interpretation />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
