import React, {useContext} from "react";
import MovieContext from "../contexts/MovieContext";
import { Link } from "react-router-dom";

import './Price.css';
const PriceCalculator = () => {
     
	const {movies} = useContext(MovieContext)
	return (
		<div className="pri">
			<p>Selected {movies.totalSeats} seats and the total price is Rs.{movies.totalSeats*movies.moviePrice}</p>
            
            <Link className='pay' to='/pay' ><button  className="butto">Payment
          </button></Link>
          
         
		</div>
	)
}

export default PriceCalculator
