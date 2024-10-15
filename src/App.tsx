// import { useState } from 'react'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)


  return (
    <>
     <div className="header-container">
    <Header />
     </div>
     <Body />
     <div className="footer-container">
    <Footer />
     </div>
    </>
  )
} 

export default App
