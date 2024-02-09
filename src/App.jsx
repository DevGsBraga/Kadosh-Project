import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Cotacao from "./pages/Cotacao"

function App() {

  return (
    <>

    <Router>
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cotacao" element={<Cotacao />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
