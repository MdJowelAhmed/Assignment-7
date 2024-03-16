
import { useEffect, useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Header from './Components/Header/Header'
import Foods from './Components/Foods/Foods'
// import Function from './Components/Function/Function'

function App() {
  const [foods, setFoods] = useState([])
  const [ready,setReady]=useState([])

  useEffect(() => {
    fetch('fakeData.json')
      .then(res => res.json())
      .then(data => setFoods(data))
  }, [])

  const handleWantToCook = (cooking) => {
    console.log(cooking)
    // const newReady = [...ready, cooking]
    const isExits=ready.find(item=> item.id==cooking.id);
    if(!isExits){
      setReady([...ready,cooking])
    }
    else{
      alert('already have')
    }
  }

  return (
    <>

      <Header></Header>
      <Banner></Banner>
      <div className='text-center space-y-3 lg:m-12'>
        <h2 className='text-4xl font-bold'>Our Recipes</h2>
        <p className=' text-xl'>Our food is very testy food.Our customers  is satisfy for our  service and food quality.<br />  We always be care full our  food quality.You advance thanks</p>
      </div>
      <div className='flex flex-col lg:flex-row m-5 lg:m-12'>
        <div className='grid grid-cols-1 lg:grid-cols-2 w-3/5 gap-5 p-4 shadow-xl m-4'>
          {
            foods.map((food, idx) => <Foods key={idx} handleWantToCook={handleWantToCook} food={food}></Foods>)
          }
        </div>

          {/* <Function></Function> */}
        {/* display */}

        <div className='w2/5 ml-10 p-6'>
          <div>
            <h2 className='text-3xl font-semibold text-center'>Want to Cook: </h2>
            <div>
              <table className="table ">
                <thead>
                  <tr className='text-xl'>
                    <th>Name</th>
                    <th>Times</th>
                    <th>Calories</th>
                  </tr>
                </thead>
              </table>
            </div>
            <div>
            {
             ready.map((item,idx) =>(
              <div key={idx}>
               <table className="table ">
                <thead>
                  <tr className=''>
                    <td>{item.name.slice(0,13)} </td>
                    <td>{item.preparing_time}</td>
                    <td>{item.calories} </td>
                    <button className="btn btn-accent">Preparing</button>
                  </tr>
                </thead>
              </table>
                
              </div>
             ))
            }
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
