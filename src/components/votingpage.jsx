import React from "react";
import { useNavigate } from 'react-router-dom';
import "../styles/VotingPage.css";
import ufcRingPic from '../assets/VOTINGPAGE/UFC-RING-PIC-5-opionions-page-background.png';
import ufcBelt from '../assets/VOTINGPAGE/ufc-belt-STREAMING-PAGE.png';
import cateringIcon from '../assets/VOTINGPAGE/catering-icon-and-text-streaming-page.png';
import houseIconRedMd from'../assets/VOTINGPAGE/home-icon-and-title-streaming-page.png';
import streamingIcon from '../assets/VOTINGPAGE/streaming-icon-and-text-first-page.png';
import trendingIcon from '../assets/VOTINGPAGE/trending-icon-and-text-streaming-page.png';
import rightLittle from '../assets/VOTINGPAGE/right group of boxing gloves showing the filling up of vote box.png'
import leftBigbox from '../assets/VOTINGPAGE/LEFTBIGBOXINGGLOVE.png'
import rightBigbox from '../assets/VOTINGPAGE/rightBIGBOXINGGLOVE.png'
import leftVotingbox from '../assets/VOTINGPAGE/VOTEBOXLEFT.png'
import rightVotingbox from '../assets/VOTINGPAGE/VOTEBOXRIGHT.png'

export const VotingPage = () => {
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate('/'); //Navigate to HomePage
  };

  const navigateToCatering = () => {
    navigate('/catering');  // Navigate to CateringPage
};

const navigateToTrending = () => {
  navigate('/trending');  // Navigate to TrendingPage
};

const navigateToStreaming = () => {
  navigate('/streaming');  // Navigate to StreamingPage
};
  return (
    <div className="opinions-page-voting">
      <div className="overlap-wrapper">
        <div className="overlap">
          <img className="UFC-RING-PIC" alt="Ufc RING PIC" src={ufcRingPic} />
          <div className="FIGHT-opinons-page">FIGHT</div>
          <div className="NIGHT-opinions-page">NIGHT</div>
          <div className="whole-ufc-belt">
            <div className="overlap-group">
              <img className="ufc-belt" alt="Ufc belt" src={ufcBelt} />
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
                  <div className="overlap-group-wrapper">
                    <div className="overlap-group-3">
                      <img className="catering-icon" alt="Catering icon" src={cateringIcon} onClick={navigateToCatering} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="trending-nav-bar">
                <div className="overlap-2">
                  <div className="trending-nav-bar-box" />
                  <div className="overlap-group-wrapper">
                    <div className="overlap-group-3">
                      <img className="trending-icon" alt="Trending icon" src={trendingIcon} onClick={navigateToTrending} />
                    </div>
                  </div>
                </div>
              </div>
              <button className="home-nav-bar-button">
                <div className="overlap-2">
                  <div className="home-nav-bar-box" />
                  <div className="home-icon-and-title">
                    <div className="overlap-group-4">
                      <img className="house-icon-red-md" alt="House icon red md" src={houseIconRedMd} onClick={navigateHome}  />
                      <div className="rectangle" />
                      <div className="ellipse" />
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </div>
          <div className="vote-box-left">
            <div className="overlap-3">
              <div className="rectangle-2" />
              <img className="img" alt="Ellipse" src={ufcBelt} />
            </div>
          </div>
          <div className="vote-box-right">
            <div className="overlap-3">
              <div className="rectangle-2" />
              <img className="img" alt="Ellipse" src={ufcBelt} />
            </div>
          </div>
          <div className="right-group-of">
            <div className="overlap-4">
              <img
                className="img-2"
                alt="Right little boxing"
                src={rightLittle}
              />
              <img
                className="img-3"
                alt="Right little boxing"
                src={rightLittle}
              />
              <img
                className="img-4"
                alt="Right little boxing"
                src={rightLittle}
              />
              <img
                className="img-5"
                alt="Right little boxing"
                src={rightLittle}
              />
            </div>
          </div>
          <img className="left-big-boxing" alt="Left big boxing" src={rightBigbox} />
          <div className="left-group-of-boxing">
            <div className="overlap-4">
              <img
                className="img-2"
                alt="Left little boxing"
                src={rightLittle}
              />
              <img
                className="img-3"
                alt="Left little boxing"
                src={rightLittle}
              />
              <img
                className="img-4"
                alt="Left little boxing"
                src={rightLittle}
              />
              <img
                className="img-5"
                alt="Left little boxing"
                src={rightLittle}
              />
            </div>
          </div>
          <img className="right-big-boxing" alt="Right big boxing" src={leftBigbox} />
          <div className="WHOS-GONNA-WIN-TEXT">WHOS GONNA WIN?</div>
          <div className="left-fighter-name">
            <div className="div-wrapper">
              <div className="text-wrapper-2">FIGHTER NAME</div>
            </div>
          </div>
          <div className="right-fighter-name">
            <div className="div-wrapper">
              <div className="text-wrapper-2">FIGHTER NAME</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};