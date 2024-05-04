import { BrowserRouter, Route, Routes} from 'react-router-dom';

import Header from './Header';
import Home from './Components/HomeCom/Home';
import Testings from './Components/HomeCom/Mous';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
    
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        
        
          <Route path='/Testings' element={<Testings/>}/>
      </Routes>
      
      
      <Footer/>
      
      
      
      </BrowserRouter>
    </div>
  );
}

export default App;
