import { MdAccessTime } from "react-icons/md";
import PropTypes from 'prop-types'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
// import Cooking from "../Cooking/Cooking";
// import Cooking from "../Cooking/Cooking";


const Foods = ({food,handleWantToCook}) => {
    const {image,name,short_description,preparing_time,calories,ingredients}=food

   const array=[...ingredients]

  return (
    <div className='space-y-3 '> 
        <img className="rounded-2xl" src={image} alt="" />
        <h2 className='text-2xl font-bold'>{name}</h2>
        <h2>{short_description}</h2>
        <hr />
        <div>
          <h2 className="text-2xl font-medium">Ingredients:{ingredients.length}</h2>
          <div>
            {
             ingredients.map((item,idx) =>(
              <div key={idx}>
               
                <ul>
                  <li>{item} </li>
                </ul>
              </div>
             ))
            }
          </div>
        </div>
        <div className='flex gap-6'>
            <div className="flex items-center">
              <MdAccessTime></MdAccessTime>
            <p>{ preparing_time} </p>
            </div>
            <h3>{calories} </h3>
        </div>
       
        <button onClick={()=>handleWantToCook(food)} className="btn btn-success">Want to cook</button>
        <ToastContainer />
    </div>
  )
}

Foods.propTypes = {
    food:PropTypes.object.isRequired,
    handleWantToCook:PropTypes.func.isRequired
}

export default Foods