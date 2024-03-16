
import PropTypes from 'prop-types'

const Ingredients = ({ingredients}) => {
  return (
    <div>
        <h2>Ingredients:{ingredients.length}</h2>
        <ul>
            li
        </ul>
     </div>
  )
}

Ingredients.propTypes = {
    ingredients:PropTypes.array.isRequired
}

export default Ingredients