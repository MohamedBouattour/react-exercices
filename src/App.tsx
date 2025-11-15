import './App.css'
import { Employees } from './screens/Employees'
import RegistrationForm from './screens/RegistrationForm/RegistrationForm'
const users = [
  {
    name:'MED',
    age:'25',
    job:'FrontEnd developer',
    country:'Tunisia'
  },
  {
    name:'ALI',
    age:'25',
    job:'BackEnd developer',
    country:'France'
  }
]
function App() {

  return (
    <>
    <RegistrationForm></RegistrationForm>  
    </>
  )
}

export default App
