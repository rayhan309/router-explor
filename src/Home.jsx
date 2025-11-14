import { useEffect, useState } from 'react'
import './App.css'
import Footer from './Components/Footer/Footer'
import Navber from './Components/Navber/Navber'
import PlantsCards from './Components/PlantsCards/PlantsCards'

function App() {

  const [planets, setPlanets] = useState([])

  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/plants")
      .then(res => res.json())
      .then(data => setPlanets([...planets, ...data.plants]))
  }, []);

  return (
    <>
    <div className='grid grid-cols-3 gap-5'>
    {
      planets.map(plant => <PlantsCards key={plant.id} plant={plant}></PlantsCards>)
    }
    </div>
    </>
  )
}

export default App
