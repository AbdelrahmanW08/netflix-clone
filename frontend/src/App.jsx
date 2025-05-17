import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/home/HomePage.jsx"
import LoginPage from "./pages/LoginPage.jsx"
import SignUpPage from "./pages/SignUpPage.jsx"
import Footer from "./components/Footer.jsx"

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
