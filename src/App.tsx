import './App.css'
import { Counter } from './components/Counter'
import { ProfileCard } from './components/ProfileCard'
import { TabMax } from './components/TabMax'
import { Employees } from './screens/Employees'
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
    <Employees></Employees>
    
    </>
  )
}

export default App
