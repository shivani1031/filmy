import Addmovie from "./components/Addmovie";
import Card from "./components/Card"
import Header from "./components/Header";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
<Header/>
<Routes>

  <Route path ="/" element ={<Card/>} />
  <Route path ="/addmovie" element ={<Addmovie/> } />

</Routes>

</Router>
    </div>
  );
}

export default App;
