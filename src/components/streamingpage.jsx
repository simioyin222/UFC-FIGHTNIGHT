import React from "react";
import { useNavigate } from 'react-router-dom';
import "../styles/StreamingPage.css";
import ufcRingPic from '../assets/STREAMINGPAGE/UFC-RING-AND-AUIUDENCE-PIC-4-streaming-page-background.png';
import ufcBelt from '../assets/STREAMINGPAGE/ufc-belt-STREAMING-PAGE.png';
import cateringIcon from '../assets/STREAMINGPAGE/catering-icon-and-text-streaming-page.png';
import opinionsIcon from '../assets/STREAMINGPAGE/Opinions-icon-and-text-first-page.png';
import trendingIcon from '../assets/STREAMINGPAGE/trending-icon-and-text-streaming-page.png';
import houseIconRedMd from'../assets/STREAMINGPAGE/home-icon-and-title-streaming-page.png';

export const StreamingPage = () => {
  const navigate = useNavigate();  // Hook to perform navigation
  
  // Function to navigate to the home page
  const navigateHome = () => {
    navigate('/');
  };

  const navigateToCatering = () => {
    navigate('/catering');  // Navigate to CateringPage
};

const navigateToTrending = () => {
  navigate('/trending');  // Navigate to TrendingPage
};

const navigateToVoting = () => {
  navigate('/voting');  // Navigate to TrendingPage
};

  return (
    <div className="streaming-page">
      <div className="overlap-wrapper">
        <div className="overlap">
          <img className="UFC-RING-PIC-first" src={ufcRingPic} alt="UFC Ring Background" />
          <div className="FIGHT-streaming-page">FIGHT</div>
          <div className="NIGHT-streaming-page">NIGHT</div>
          <div className="whole-ufc-belt">
            <div className="overlap-group">
              <img className="ufc-belt-FIRST-PAGE" src={ufcBelt} alt="UFC Belt" />
              <button className="home-nav-bar-button" onClick={navigateHome}>
                <div className="div">
                  <div className="home-nav-bar-box" />
                  <div className="home-icon-and-title">
                    <div className="overlap-group-2">
                      <img src={houseIconRedMd} alt="House icon red md" className="house-icon-red-md" />
                      <div className="rectangle" />
                      <div className="ellipse" />
                    </div>
                  </div>
                </div>
              </button>
              <div className="catering-nav-bar">
                <div className="div">
                  <div className="catering-nav-bar-box" />
                  <div className="overlap-group-wrapper">
                    <div className="overlap-group-3">
                    <img src={cateringIcon} alt="Catering" className="catering-icon" onClick={navigateToCatering} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="trending-nav-bar">
                <div className="div">
                  <div className="trending-nav-bar-box" />
                  <div className="overlap-group-wrapper">
                    <div className="overlap-group-3">
                      <img src={trendingIcon} alt="Trending" className="trending-icon" onClick={navigateToTrending} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="opinions-nav-bar">
                <div className="overlap-2">
                  <div className="opinions-nav-bar-box" />
                  <div className="opinions-icon-and">
                    <div className="overlap-group-4">
                      <img src={opinionsIcon} alt="Opinions" className="opinions-icon" onClick={navigateToVoting} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};