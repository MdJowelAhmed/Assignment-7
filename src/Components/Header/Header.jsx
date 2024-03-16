
import { RxAvatar } from "react-icons/rx";
import PropTypes from 'prop-types'

const Header = props => {
  return (
    <div className=' lg:m-12'>
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      
    </div>
    <a className="btn btn-ghost text-sm lg:text-3xl font-bold">Testy Food</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Home</a></li>
      <li>
        <details>
          <summary>Recices</summary>
         
        </details>
      </li>
      <li><a>About</a></li>
      <li><a>Search</a></li>
    </ul>
  </div>
  <div className="navbar-end">
  <input type="text" placeholder="Search" className="input input-bordered input-primary w-28 lg:w-48" />
    <a className="text-6xl lg:ml-5"><RxAvatar></RxAvatar></a>
  </div>
</div>
    </div>
  )
}

Header.propTypes = {}

export default Header