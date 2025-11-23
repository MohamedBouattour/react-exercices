import { Route,Routes } from 'react-router-dom'
import './App.css'
import RegistrationForm from './screens/RegistrationForm/RegistrationForm'
import { Employees } from './screens/Employees'
import { Navbar } from './components/Navbar'

function App() {

  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<RegistrationForm/>} />
      <Route path="/employees" element={<Employees/>} />
      <Route path="*" element={<RegistrationForm/>} />
    </Routes>
    </>
      )
}

export default App
