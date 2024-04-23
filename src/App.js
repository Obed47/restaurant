import './App.css';
import Header from './Header/Header';
import Foods from './Foods/foods';
import Navigation from './Navigation/Navigation';
import Order from './order/order';
import AboutPage from './About/about';
import ContactPage from './Contact/contact';
import Welcome from './Welcome./Welcome';
import { useEffect } from 'react';
import { Routes,Route } from 'react-router-dom';
import NotFound from './notFound';

function App() {
  useEffect(()=>
  {
    //useEffect hook used to print this console.log. 
    //with no dependency array means it runs on every re-render
      console.log("Hello");
  })
  return (
    <div className="App">
      <Header/>
      {/* routing here. Take note */}
        <Routes>
          <Route path='/' element={<Welcome/>}/>
          <Route path='order' element={<Order/>}/>
          <Route path='contact' element={<ContactPage/>}/>
          <Route path='about' element={<AboutPage/>}/>
          <Route path='foods' element={<Foods/>}/>
          <Route path='navigation' element={<Navigation/>}/>
          <Route path='error' element={<NotFound/>}/>
        </Routes>
    </div>
  );
}
export default App;
