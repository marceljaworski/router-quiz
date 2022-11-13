import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import './App.css'
import Home from './components/Home'
import Question from './components/Question'
import questions from './questions'
console.log(Object.keys(questions))

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
          <Route path="/question" element={<Question />}/>
          
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
