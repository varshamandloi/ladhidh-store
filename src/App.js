import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import DealPage from "./pages/DealPage"
import CategoriesPage from "./pages/CategoriesPage"
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
     <Router>
     <Navbar/>
     <Routes>
      <Route path="/" element = { <Home/> } /> 
      <Route path="/deals" element = { <DealPage/> } /> 
      <Route path="/categories" element = { <CategoriesPage/> } /> 
     </Routes>
     </Router>
    </div>
  );
}

export default App;

