import React from 'react';
import Navbar from '../../Components/Navbar';
import Sidebar from '../../Components/SlideBar/indexx';
import './preferences.css'; 
import { FaPlaneDeparture, FaBed, FaMapMarkerAlt, FaSuitcase } from 'react-icons/fa'; // Importing icons

const Preferences = () => {
  return (
    <div>
      <Navbar />
    <div className="preferences-page">
      {/* Navbar */}
      

      {/* Main Layout */}
      <div className="preferences-layout">
        {/* Sidebar */}
        <Sidebar />

        {/* Preferences Content */}
        <div className="preferences-content">
          <h2 className="preferences-title" >Preferences</h2>

          <div className="preference-card active">
            <div className="preference-icon"><FaPlaneDeparture /></div>
            <div className="preference-text">
              <h3 style={{backgroundColor:"#f5f5f7"}}>Origin preferences</h3>
              <p style={{backgroundColor:"#f5f5f7"}}>Lorem ipsum dolor sit amet, consectetur</p>
            </div >
            <div className="preference-arrow" style={{backgroundColor:"#f5f5f7"}} ><img src="/assets/vactor1.png" alt="Right Icon" className="icon-image9" style={{backgroundColor:"#f5f5f7"}} /></div>
          </div>

          <div className="preference-card">
            <div className="preference-icon"><FaBed /></div>
            <div className="preference-text">
              <h3>Accommodation preferences</h3>
              <p>Lorem ipsum dolor sit amet, consectet</p>
            </div>
            <div className="preference-arrow"><img src="/assets/vactor1.png" alt="Right Icon" className="icon-image9" /></div>
          </div>

          <div className="preference-card">
            <div className="preference-icon"><FaMapMarkerAlt /></div>
            <div className="preference-text">
              <h3 >Destination preferences</h3>
              <p >Lorem ipsum dolor sit amet, consectet</p>
            </div>
            <div className="preference-arrow"><img src="/assets/vactor1.png" alt="Right Icon" className="icon-image9" /></div>
          </div>

          <div className="preference-card">
            <div className="preference-icon"><FaSuitcase /></div>
            <div className="preference-text">
              <h3 >My holidays preferences</h3>
              <p >Lorem ipsum dolor sit amet, consectet</p>
            </div>
            <div className="preference-arrow"><img src="/assets/vactor1.png" alt="Right Icon" className="icon-image9" /></div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Preferences;
