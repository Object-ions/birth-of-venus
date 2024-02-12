import { Route, Routes } from 'react-router-dom';
import './App.scss';
import NavBar from './layout/NavBar';
import Home from './pages/home/Home';
import Interpretation from './pages/interpretation/Interpretation';
import Objectives from './pages/objectives/Objectives';
import 'bootstrap/dist/css/bootstrap.min.css';
import Annotations from './pages/annotations/Annotations';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/objectives" element={<Objectives />} />
          <Route path="/interpretation" element={<Interpretation />} />
          <Route path="/annotations" element={<Annotations />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
