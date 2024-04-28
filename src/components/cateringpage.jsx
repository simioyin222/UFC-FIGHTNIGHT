import React from "react";
import "../styles/CateringPage.css";

export const CateringPage = () => {
  return (
    <div className="catering-page">
      <div className="overlap-wrapper">
        <div className="overlap">
          <img
            className="UFC-RING-AND-AUDINCE"
            alt="Ufc RING AND AUDINCE"
            src="UFC-RING-AND-AUDINCE-PIC-2-catering-page-background.png"
          />
          <div className="FIGHT-catering-page">FIGHT</div>
          <div className="NIGHT-catering-page">NIGHT</div>
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
              <button className="home-nav-bar-button">
                <div className="overlap-2">
                  <div className="home-nav-bar-box" />
                  <div className="home-icon-and-title">
                    <div className="overlap-group-3">
                      <img className="house-icon-red-md" alt="House icon red md" src="house-icon-red-md-1.png" />
                      <div className="rectangle" />
                      <div className="ellipse" />
                      <div className="text-wrapper">Home</div>
                    </div>
                  </div>
                </div>
              </button>
              <div className="trending-nav-bar">
                <div className="overlap-2">
                  <div className="trending-nav-bar-box" />
                  <div className="trending-icon-and">
                    <div className="overlap-group-4">
                      <div className="text-wrapper">Trending</div>
                      <img className="trending-icon" alt="Trending icon" src="trending-icon.png" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="opinions-nav-bar">
                <div className="overlap-3">
                  <div className="opinions-nav-bar-box" />
                  <div className="opinions-icon-and">
                    <div className="overlap-group-5">
                      <div className="text-wrapper-2">Opinions</div>
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