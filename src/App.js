import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import { Home } from './components/Home';
import { View } from './components/View';
function App() {
  return (
    <div className="App">
       <Router>
         <Routes>
           <Route exact  path="/" element={<Home></Home>}></Route>
           <Route exact  path="/view/:id" element={<View></View>}></Route>

         </Routes>
       </Router>
    </div>
  );
}

export default App;
