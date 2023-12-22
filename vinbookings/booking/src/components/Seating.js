import React,{useState} from "react"
import SeatAvailability from './SeatAvalibility';
import SeatMatrix from './SeatMatrix';
import PriceCalculator from './PriceCalculator';
import MovieContext from "../contexts/MovieContext";
function Seating(){
    const [movies, EditMovies] = useState({

		moviePrice: 120,
		totalSeats: 0,
		seatNumbers: []
	})
    return(
    <MovieContext.Provider value={{ movies, changeState: EditMovies }}>
    <div style={{backgroundColor:"black"}}>
              <SeatMatrix />
              <SeatAvailability />
              <PriceCalculator />
   </div>
   </MovieContext.Provider>
    )
}
export default Seating