import './App.css'
import Home from './Components/Home/Home'
import Nav from './Components/Nav/Nav'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <div>
      <Router>
        <Home />
        <Nav />
      {/* <Routes>
        <Route path='/nav' element={<Nav />}/>
      </Routes> */}
      </Router>
    </div>
  )
}

export default App
