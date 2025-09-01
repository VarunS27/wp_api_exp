import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import Home from './components/pages/Home'
import Sub1 from './components/pages/sub1'
import Sub2 from './components/pages/sub2'
import Sub3 from './components/pages/sub3'
import Sub4 from './components/pages/sub4'
import Sub5 from './components/pages/sub5'
import Sub6 from './components/pages/sub6'
import Sub7 from './components/pages/sub7'
import Sub8 from './components/pages/sub8'
import Sub9 from './components/pages/sub9'
import Sub10 from './components/pages/sub10'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/subject1" element={<Sub1 />} />
        <Route path="/subject2" element={<Sub2 />} />
        <Route path="/subject3" element={<Sub3 />} />
        <Route path="/subject4" element={<Sub4 />} />
        <Route path="/subject5" element={<Sub5 />} />
        <Route path="/subject6" element={<Sub6 />} />
        <Route path="/subject7" element={<Sub7 />} />
        <Route path="/subject8" element={<Sub8 />} />
        <Route path="/subject9" element={<Sub9 />} />
        <Route path="/subject10" element={<Sub10 />} />
      </Routes>
    </Router>
  )
}

export default App
