import React from 'react'
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
        <p>This is a quiz about GTML,CSS and JavaScript, that can be used to repeat all the basics that are needed in everday's life of  web developer.</p>
        <p> Find out if you dnow all the details!</p>
        <Link to={`/question/`}><button>Let's have fun!</button></Link>
    </div>
  )
}

export default Home