import React from "react";
import { useNavigate } from 'react-router-dom';
import "../styles/TrendingPage.css";
import ufcRingPic from '../assets/TRENDINGPAGE/UFC-RING-PIC-1-trending-page-background.png';
import ufcBelt from '../assets/TRENDINGPAGE/ufc-belt-STREAMING-PAGE.png';
import opinionsIcon from '../assets/TRENDINGPAGE/Opinions-icon-and-text-trendingpage.png';
import cateringIcon from '../assets/TRENDINGPAGE/catering-icon-and-text-trending-page.png';
import houseIconRedMd from'../assets/TRENDINGPAGE/home-icon and-title-trending-page.png';
import streamingIcon from '../assets/TRENDINGPAGE/streaming-icon-and-text-trending-page.png';

export const TrendingPage = () => {
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate('/');
  };

  const navigateToCatering = () => {
    navigate('/catering');  // Navigate to CateringPage
};

const navigateToStreaming = () => {
  navigate('/streaming');  // Navigate to StreamingPage
};

const navigateToVoting = () => {
  navigate('/voting');  // Navigate to VotingPage
};

  return (
    <div className="trending-page">
      <div className="overlap-wrapper">
        <div className="overlap">
          <img className="UFC-RING-PIC" alt="Ufc RING PIC" src={ufcRingPic} />
          <div className="FIGHT-trending-page">FIGHT</div>
          <div className="NIGHT-trending-page">NIGHT</div>
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
              <div className="catering-nav-bar">
                <div className="overlap-2">
                  <div className="catering-nav-bar-box" />
                  <div className="catering-icon-and">
                    <div className="overlap-group-3">
                      <img className="catering-icon" alt="Catering icon" src={cateringIcon} onClick={navigateToCatering} />
                    </div>
                  </div>
                </div>
              </div>
              <button className="home-nav-bar-button">
                <div className="overlap-3">
                  <div className="home-nav-bar-box" />
                  <div className="home-icon-and-title">
                    <div className="overlap-group-4">
                      <img className="house-icon-red-md" alt="House icon red md" src={houseIconRedMd} onClick={navigateHome} />
                      <div className="rectangle" />
                      <div className="ellipse" />
                    </div>
                  </div>
                </div>
              </button>
              <div className="opinions-nav-bar">
                <div className="overlap-4">
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