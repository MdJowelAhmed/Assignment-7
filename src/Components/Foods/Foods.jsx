
import PropTypes from 'prop-types'

const Foods = ({food}) => {
    const {image,name,short_description,preparing_time,calories,ingredients}=food
  return (
    <div> 
        <h2>{name}</h2>
        <h2>{short_description}</h2>
        <div>
            <p>{preparing_time} </p>
            <h3>{calories} </h3>
        </div>
    </div>
  )
}

Foods.propTypes = {
    food:PropTypes.object.isRequired
}

export default Foods