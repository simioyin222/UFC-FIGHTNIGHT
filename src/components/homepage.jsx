import React from "react";
import "../styles/HomePage.css";
import ufcRingPic from '../assets/HOMEPAGE/UFC-RING-PIC-3-first-page-background.png';
import leftUfcLaughing from '../assets/HOMEPAGE/left-ufc-laughing-guy-2.png';
import rightUfcLaughing from '../assets/HOMEPAGE/right-ufc-laughing-guy-1.png';
import ufcBelt from '../assets/HOMEPAGE/ufc-belt-FIRST-PAGE.png';
import streamingIcon from '../assets/HOMEPAGE/streaming-icon-and-text-first-page.png';
import cateringIcon from '../assets/HOMEPAGE/catering-icon-and-text-streaming-page.png';
import opinionsIcon from '../assets/HOMEPAGE/opinions-icon-and-text-first-page.png';
import trendingIcon from '../assets/HOMEPAGE/trending-icon-and-text-streaming-page.png';
import sendInviteIcon from '../assets/HOMEPAGE/send-reminder-icon.png';
import setReminderIcon from '../assets/HOMEPAGE/set-reminder-on-device.png';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

// Helper function to create unique event IDs
const createEventId = () => String(Date.now() + Math.random());

// Event selection handler
const handleDateSelect = (selectInfo) => {
  let title = prompt('Please enter a new title for your event');
  let calendarApi = selectInfo.view.calendar;

  calendarApi.unselect(); // Clear date selection

  if (title) {
    calendarApi.addEvent({
      id: createEventId(),
      title,
      start: selectInfo.startStr,
      end: selectInfo.endStr,
      allDay: selectInfo.allDay
    });
  }
};

export const HomePage = () => {
  return (
    <div className="first-page-home-page">
      <img className="UFC-RING-PIC-first" src={ufcRingPic} alt="UFC Ring Background" />
      <div className="calendar-container">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
          }}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          weekends={true}
          events={[ // Static events for demonstration
            { title: 'Event 1', start: '2024-04-20', end: '2024-04-22' },
            { title: 'Event 2', start: '2024-04-23', allDay: true }
          ]}
          select={handleDateSelect}
        />
      </div>
      <img className="left-ufc-laughing" src={leftUfcLaughing} alt="Left UFC Laughing Guy" />
      <img className="right-ufc-laughing" src={rightUfcLaughing} alt="Right UFC Laughing Guy" />
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="FIGHT-text-FIRST">FIGHT</div>
          <div className="NIGHT-text-FIRST">NIGHT</div>
          <div className="whole-ufc-belt">
            <div className="overlap-group">
              <img className="ufc-belt-FIRST-PAGE" src={ufcBelt} alt="UFC Belt" />
              <div className="streaming-nav-bar">
                <div className="div">
                  <div className="streaming-nav-bar-2" />
                  <img className="streaming-icon-and" src={streamingIcon} alt="Streaming Icon" />
                </div>
              </div>
              <div className="catering-nav-bar">
                <div className="overlap-2">
                  <div className="catering-nav-bar-box" />
                  <img className="catering-icon-and" src={cateringIcon} alt="Catering Icon" />
                </div>
              </div>
              <div className="opinions-nav-bar">
                <div className="overlap-2">
                  <div className="opinions-nav-bar-box" />
                  <img className="opinions-icon-and" src={opinionsIcon} alt="Opinions Icon" />
                </div>
              </div>
              <div className="trending-nav-bar">
                <div className="overlap-3">
                  <div className="trending-nav-bar-box" />
                  <img className="trending-icon-and" src={trendingIcon} alt="Trending Icon" />
                </div>
              </div>
            </div>
          </div>
          <div className="notfication-footer">
            <img className="send-invite-send" src={sendInviteIcon} alt="Send Invite Icon" />
            <img className="set-reminder-on" src={setReminderIcon} alt="Set Reminder Icon" />
          </div>
        </div>
      </div>
    </div>
  );
};