import './App.css';
import Header from'./component/Header/Header'
import Footer from './component/Footer/Footer'
import Home from './component/Home/Home'
import ExploreMaldives from './component/ExploreMaldives/Maldives.jsx'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Header/>
        <Routes>
        
        
        <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />}/>
          <Route path='/ExploreMaldives' element={<ExploreMaldives />}/>
        </Routes>
      <Footer/>
      
    </Router>
  );
}

export default App;
