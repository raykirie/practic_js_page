import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import NotFoundPage from './pages/NotFoundPage';
import ProductPage from './pages/ProductPage';
import InfoproductPage from './pages/InfoProductPage';
import Header from './components/Header';
import Footer from './components/Footer';



function App() {
  return (
    <div>
        <Router>
          <Header/>
            <Routes>
              <Route path='*' element={<NotFoundPage/>}/>
              <Route path='/product' element={<ProductPage/>}/>
              <Route path='/product/:id' element={<InfoproductPage/>}/>
            </Routes>
            <Footer/>
        </Router>
    </div>
    
  );
}

export default App;
