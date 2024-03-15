
import PropTypes from 'prop-types'

const Banner = props => {
  return (
    <div className='lg:m-12 '>
        <div className="hero min-h-screen rounded-2xl" style={{backgroundImage: 'url( https://images.unsplash.com/photo-1556911220-dabc1f02913a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-">
      <h1 className="mb-5 text-5xl font-bold">Discover an exceptional cooking <br /> class tailored for you! </h1>
      <p className="mb-5">A balanced diet is a cookie in each hand. A messy kitchen is a sign of happiness. <br /> An oasis of pleasure. As nature teaches us. Better food better mood. Beyond the boundaries of taste. <br /> Big food little money testy food.</p>
      <button className="btn btn-primary">Explore More</button>
      <button className="btn wide ml-20">Your Feedback</button>
    </div>
  </div>
</div>
    </div>
  )
}

Banner.propTypes = {}

export default Banner