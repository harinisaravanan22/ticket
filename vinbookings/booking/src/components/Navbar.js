import { Link } from 'react-router-dom'
import  "./Navbar.css";

import {Breadcrumbs} from "@mui/material";
const Navbar = () =>{
    return(
      <div className="con">
        <Breadcrumbs maxItems={2} aria-label="breadcrumb">
          
        <Link className='hom' to='/'>
          <button className='but'>
          Home
          </button>
        </Link>
       
        <Link className='log' to='/log'>
          <button className='but'>
          Login
          </button>
        </Link>

        <Link className='reg' to='/reg' >
          <button className='but'>
         Sign up
         </button>
        </Link>
      </Breadcrumbs>
      </div>
    )
}
export default Navbar
