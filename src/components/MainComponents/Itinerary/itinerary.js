import React from 'react'
import { useParams } from 'react-router-dom'

const { id }  = useParams();

console.log(id);

let ItineraryPage = (props) => {


  return (

    <div className='ItineraryContainer'>
      The itinerary page will live here
    </div>
  )



}

export default ItineraryPage