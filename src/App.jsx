import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import './App.css'
import Home from './components/Home'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <header>
     
          <Link to="/">Home</Link>&nbsp;|&nbsp;
          {/* <Link to="/products">Products</Link> */}
      </header>
        <h1>My little Quiz</h1>
        <span>Check your knowledge!</span>
        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
