
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Container } from "react-bootstrap"
import Cars from './pages/Cars'
import LandingPage from './pages/LandingPage'


function App() {

  return (
    <Container>
      <BrowserRouter>
       <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path='/car/:carId' element={<Cars />} />
       </Routes>
      </BrowserRouter>
    </Container>
  )
}

export default App
