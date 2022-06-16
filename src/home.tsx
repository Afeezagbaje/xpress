import Navbar from './component/navbar/Navbar'
import React from 'react'

const Home = () => {
  return (
    <React.Fragment>
        <Navbar link="/signin"/>
        <div className="container" style={{display: "flex", justifyContent: "center"}}>
            
            <h1>Welcome to Xpress</h1>
        </div>
    </React.Fragment>
)}

export default Home