import React, {useState, useEffect, Fragment} from 'react';
import { handle } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Map from '../Map/google-map';
import axios from 'axios';
axios.defaults.baseURL = "http://localhost:3000";

const ItineraryTest = () => {
  const {id} = useParams();

  const [newData, setNewData] = useState(null);

  const getData = (id) => {
    axios.get(`/db/${id}`)
      .then(({data}) => {
        setNewData(data[0]);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    if (newData === null) {
      getData(id)
    }
  }, [newData])

  if (newData) {return (
    <Fragment>
      <div className="itinerary-container">
        <div className='mapContainer'>
          {newData !== null ?
            <Map addressObjFrom={newData.start} addressObjTo={newData.end} toggle={false} waypoints={newData.waypoints}/> : <div>new data is null</div>
          }
        </div>
        <div className='locationList'>
          <div className='origin'>
            {newData.start.formatted_address}
          </div>
          <div className='destination'>
            {newData.end.formatted_address}
          </div>
        </div>
      </div>
    </Fragment>
  )} else {
    return (<div></div>)
  }
};

export default ItineraryTest;
