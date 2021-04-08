import React, {useState, useEffect, Fragment} from 'react';
import { handle } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Map from "../Map/google-map";
// import ListItems from '../MainComponents/Trip-Planner/listItems-itinerary.js';
import ListItems from "../Trip-Planner/listItems-itinerary.js"
import axios from 'axios';

axios.defaults.baseURL = `http://${process.env.IP_ADDRESS}:3000`;
import {FacebookShareButton, EmailShareButton, TwitterShareButton} from 'react-share'
import {FacebookIcon, EmailIcon, TwitterIcon} from 'react-share'

const ItineraryTest = () => {
  const {id} = useParams();
  const [newData, setNewData] = useState(null);

  const getData = (id) => {
    axios.get(`/db/${id}`)
      .then(({data}) => {
        console.log(data);
        setNewData(data[0]);
        console.log('current url: ', window.location.href);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    if (newData === null) {
      getData(id)
    }
  }, [newData])

  const copyURL = () => {
    const url = document.createElement('textarea');
    url.value = window.location.href;
    document.body.appendChild(url);
    url.select();
    document.execCommand('copy');
    document.body.removeChild(url);
  }

  if (newData) {return (
    <Fragment>
      <div className="itinerary-container">
        <div className='mapContainer'>
          {newData !== null ?
            <Map addressObjFrom={newData.start} addressObjTo={newData.end} toggle={false} waypoints={newData.waypoints} locationFrom={newData.start.geometry.location} /> : <div>new data is null</div>
          }
        </div>
        <div className='overarching-list-items-container'>
          <div className='list-items-itinerary-container'>
            <ListItems start={newData.start} end={newData.end} waypoints={newData.waypoints}/>
          </div>
          <div className='circular-button-icon-container'>
            <button onClick={copyURL} className="copy-button"><i className="far fa-copy"></i></button>
            <FacebookShareButton url={window.location.href}>
              <FacebookIcon size={50} round />
            </FacebookShareButton>
            <EmailShareButton subject={'Hey Fellow Biker Bros. Look at this cool biker trip I made for us tough guys'} body={'Super cool, right guys?'} url={window.location.href}>
              <EmailIcon size={50} round />
            </EmailShareButton>
            <TwitterShareButton url={window.location.href}>
              <TwitterIcon size={50} round />
            </TwitterShareButton>
          </div>
          <br></br>
        </div>
      </div>
    </Fragment>
  )} else {
    return (<div></div>)
  }
};

export default ItineraryTest;
