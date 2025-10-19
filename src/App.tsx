import './App.css'
import { Counter } from './compoents/Counter'
import { ProfileCard } from './compoents/ProfileCard'
import { TabMax } from './compoents/TabMax'
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
    <Counter></Counter>
    <TabMax></TabMax>
    {users.map(user =>(
      <ProfileCard user={user}></ProfileCard>
    ))}
    </>
  )
}

export default App
