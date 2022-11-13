import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import './App.css'
import Home from './components/Home'
import Questions from './components/Question'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <header>
     
          <Link to="/">Home</Link>
          {/* <Link to="/products">Products</Link> */}
        <h1>My little Quiz</h1>
        <span>Check your knowledge!</span>
      </header>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/question" element={<Questions />}/>
          
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
