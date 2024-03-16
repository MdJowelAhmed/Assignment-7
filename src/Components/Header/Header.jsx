import { CiSearch } from "react-icons/ci";
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
  <label className="input input-bordered flex items-center gap-2">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
  <input type="text" className="grow" placeholder="Search" />
  
</label>
    <a className="text-6xl lg:ml-5"><RxAvatar></RxAvatar></a>
  </div>
</div>
    </div>
  )
}

Header.propTypes = {}

export default Header