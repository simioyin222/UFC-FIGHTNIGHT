import React from "react";
import { useNavigate } from 'react-router-dom';
import "../styles/CateringPage.css";
import ufcRingPic from '../assets/CATERINGPAGE/UFC-RING-AND-AUDINCE-PIC-2-catering-page-background.png';
import ufcBelt from '../assets/CATERINGPAGE/ufc-belt-STREAMING-PAGE.png';
import opinionsIcon from '../assets/CATERINGPAGE/Opinions-icon-and-text-catering-page.png';
import trendingIcon from '../assets/CATERINGPAGE/trending-icon-and-text-catering-page.png';
import houseIconRedMd from'../assets/CATERINGPAGE/home-icon-and-title-streaming-page.png';
import streamingIcon from '../assets/CATERINGPAGE/streaming-icon-and-text-catering-page.png';

export const CateringPage = () => {
  const navigate = useNavigate();

  const navigateToStreaming = () => {
    navigate('/streaming');  // Navigate to StreamingPage
};

const navigateHome = () => {
  navigate('/'); // Navigate to HomePage
};

const navigateToTrending = () => {
    navigate('/trending');  // Navigate to TrendingPage
  };

  const navigateToVoting = () => {
    navigate('/voting');  // Navigate to TrendingPage
  };

  return (
    <div className="catering-page">
      <div className="overlap-wrapper">
        <div className="overlap">
          <img
            className="UFC-RING-AND-AUDINCE"
            alt="Ufc RING AND AUDINCE"
            src={ufcRingPic}
          />
          <div className="FIGHT-catering-page">FIGHT</div>
          <div className="NIGHT-catering-page">NIGHT</div>
          <div className="whole-ufc-belt">
            <div className="overlap-group">
              <img className="ufc-belt-STREAMING" alt="Ufc belt STREAMING" src={ufcBelt} />
              <div className="streaming-nav-bar">
                <div className="div">
                  <div className="streaming-nav-bar-2" />
                  <div className="streaming-icon-and">
                    <div className="overlap-group-2">
                      <img className="streaming-icon" alt="Streaming icon" src={streamingIcon} onClick={navigateToStreaming} />
                    </div>
                  </div>
                </div>
              </div>
              <button className="home-nav-bar-button">
                <div className="overlap-2">
                  <div className="home-nav-bar-box" />
                  <div className="home-icon-and-title">
                    <div className="overlap-group-3">
                      <img className="house-icon-red-md" alt="House icon red md" src={houseIconRedMd} onClick={navigateHome} />
                      <div className="rectangle" />
                      <div className="ellipse" />
                    </div>
                  </div>
                </div>
              </button>
              <div className="trending-nav-bar">
                <div className="overlap-2">
                  <div className="trending-nav-bar-box" />
                  <div className="trending-icon-and">
                    <div className="overlap-group-4">
                      <img className="trending-icon" alt="Trending icon" src={trendingIcon} onClick={navigateToTrending} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="opinions-nav-bar">
                <div className="overlap-3">
                  <div className="opinions-nav-bar-box" />
                  <div className="opinions-icon-and">
                    <div className="overlap-group-5">
                      <img className="opinions-icon" alt="Opinions icon" src={opinionsIcon} onClick={navigateToVoting} />
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