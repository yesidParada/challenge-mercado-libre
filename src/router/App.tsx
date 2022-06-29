import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Home from '../views/home';
import Deatil from '../views/deatil';
import Header from '../components/header';

function App() {
  return (
    <Router>
      <Header/>
      <Routes >
        <Route path="/" element={<Home/>} />
        <Route path="/items" element={<Home/>} />
        <Route path="/items/:id" element={<Deatil/>}/>
        <Route path="*" element={<Home/>} />
      </Routes >
    </Router>
  );
}

export default App;
