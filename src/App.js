import './App.css';
import Header from './Header/Header';
import Foods from './Foods/foods';
import Navigation from './Navigation/Navigation';
import Order from './order/order';
import AboutPage from './About/about';
import ContactPage from './Contact/contact';
import Welcome from './Welcome./Welcome';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
function App() {
  //routing working here
  return (
    <div className="App">
      <Header/>
        <Routes>
        <Route path='/' element={<Welcome/>}/>
          <Route path='order' element={<Order/>}/>
          <Route path='contact' element={<ContactPage/>}/>
          <Route path='about' element={<AboutPage/>}/>
          <Route path='foods' element={<Foods/>}/>
          <Route path='navigation' element={<Navigation/>}/>
        </Routes>
    </div>
  );
}
export default App;
