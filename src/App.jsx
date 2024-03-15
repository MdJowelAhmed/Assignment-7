
import { useEffect, useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Header from './Components/Header/Header'
import Foods from './Components/Foods/Foods'
import Function from './Components/Function/Function'

function App() {
  const [foods, setFoods] = useState([])

  useEffect(() => {
    fetch('fakeData.json')
      .then(res => res.json())
      .then(data => setFoods(data))
  }, [])

  return (
    <>

      <Header></Header>
      <Banner></Banner>
      <div className='text-center space-y-3 lg:m-12'>
        <h2 className='text-4xl font-bold'>Our Recipes</h2>
        <p className=' text-xl'>Our food is very testy food.Our customers  is satisfy for our  service and food quality.<br />  We always be care full our  food quality.You advance thanks</p>
      </div>
      <div className='flex lg:m-12'>
        <div className='grid grid-cols-1 lg:grid-cols-2 w-3/5'>
          {
            foods.map(food => <Foods key={food.id} food={food}></Foods>)
          }
        </div>
        <div className='w2/5 ml-10'>
          <Function></Function>
        </div>
      </div>

    </>
  )
}

export default App
