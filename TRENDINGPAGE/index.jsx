import React from "react";
import "./style.css";

export const TrendingPage = () => {
  return (
    <div className="trending-page">
      <div className="overlap-wrapper">
        <div className="overlap">
          <img className="UFC-RING-PIC" alt="Ufc RING PIC" src="UFC-RING-PIC-1-trending-page-background.png" />
          <div className="FIGHT-trending-page">FIGHT</div>
          <div className="NIGHT-trending-page">NIGHT</div>
          <div className="whole-ufc-belt">
            <div className="overlap-group">
              <img className="ufc-belt-STREAMING" alt="Ufc belt STREAMING" src="ufc-belt-STREAMING-PAGE.png" />
              <div className="streaming-nav-bar">
                <div className="div">
                  <div className="streaming-nav-bar-2" />
                  <div className="streaming-icon-and">
                    <div className="overlap-group-2">
                      <div className="text-wrapper">Streaming</div>
                      <img className="streaming-icon" alt="Streaming icon" src="streaming-icon.png" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="catering-nav-bar">
                <div className="overlap-2">
                  <div className="catering-nav-bar-box" />
                  <div className="catering-icon-and">
                    <div className="overlap-group-3">
                      <div className="text-wrapper-2">Catering</div>
                      <img className="catering-icon" alt="Catering icon" src="catering-icon.png" />
                    </div>
                  </div>
                </div>
              </div>
              <button className="home-nav-bar-button">
                <div className="overlap-3">
                  <div className="home-nav-bar-box" />
                  <div className="home-icon-and-title">
                    <div className="overlap-group-4">
                      <img className="house-icon-red-md" alt="House icon red md" src="house-icon-red-md-1.png" />
                      <div className="rectangle" />
                      <div className="ellipse" />
                      <div className="text-wrapper">Home</div>
                    </div>
                  </div>
                </div>
              </button>
              <div className="opinions-nav-bar">
                <div className="overlap-4">
                  <div className="opinions-nav-bar-box" />
                  <div className="opinions-icon-and">
                    <div className="overlap-group-5">
                      <div className="text-wrapper-3">Opinions</div>
                      <img className="opinions-icon" alt="Opinions icon" src="opinions-icon.png" />
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