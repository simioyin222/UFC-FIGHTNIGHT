import React from "react";
import "./style.css";

export const StreamingPage = () => {
  return (
    <div className="streaming-page">
      <div className="overlap-wrapper">
        <div className="overlap">
          <img
            className="UFC-RING-AND"
            alt="Ufc RING AND"
            src="UFC-RING-AND-AUIUDENCE-PIC-4-streaming-page-background.png"
          />
          <div className="FIGHT-streaming-page">FIGHT</div>
          <div className="NIGHT-streaming-page">NIGHT</div>
          <div className="whole-ufc-belt">
            <div className="overlap-group">
              <img className="ufc-belt-STREAMING" alt="Ufc belt STREAMING" src="ufc-belt-STREAMING-PAGE.png" />
              <button className="home-nav-bar-button">
                <div className="div">
                  <div className="home-nav-bar-box" />
                  <div className="home-icon-and-title">
                    <div className="overlap-group-2">
                      <img className="house-icon-red-md" alt="House icon red md" src="house-icon-red-md-1.png" />
                      <div className="rectangle" />
                      <div className="ellipse" />
                      <div className="text-wrapper">Home</div>
                    </div>
                  </div>
                </div>
              </button>
              <div className="catering-nav-bar">
                <div className="div">
                  <div className="catering-nav-bar-box" />
                  <div className="overlap-group-wrapper">
                    <div className="overlap-group-3">
                      <div className="text-wrapper">Catering</div>
                      <img className="catering-icon" alt="Catering icon" src="catering-icon.png" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="trending-nav-bar">
                <div className="div">
                  <div className="trending-nav-bar-box" />
                  <div className="overlap-group-wrapper">
                    <div className="overlap-group-3">
                      <div className="text-wrapper">Trending</div>
                      <img className="trending-icon" alt="Trending icon" src="trending-icon.png" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="opinions-nav-bar">
                <div className="overlap-2">
                  <div className="opinions-nav-bar-box" />
                  <div className="opinions-icon-and">
                    <div className="overlap-group-4">
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