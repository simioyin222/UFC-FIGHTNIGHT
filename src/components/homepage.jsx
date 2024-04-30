import React from "react";
import "../styles/HomePage.css";
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
    <div className="home-page">
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
      <div className="overlap-wrapper">
        <div className="overlap">
        <img className="UFC-RING-PIC-first" alt="Ufc RING PIC first" src="../../assets/HOMEPAGE/UFC-RING-PIC-3-first-page-background.png" />
        <img className="left-ufc-laughing" alt="Left ufc laughing" src="../assets/HOMEPAGE/left-ufc-laughing-guy-2.png" />
        <img className="right-ufc-laughing" alt="Right ufc laughing" src="../assets/HOMEPAGE/right-ufc-laughing-guy-1.png" />
          <div className="FIGHT-text-FIRST">FIGHT</div>
          <div className="NIGHT-text-FIRST">NIGHT</div>
          <div className="whole-ufc-belt">
            <div className="overlap-group">
            <img className="ufc-belt-FIRST-PAGE" alt="Ufc belt FIRST PAGE" src="../assets/HOMEPAGE/ufc-belt-FIRST-PAGE.png" />
              <div className="streaming-nav-bar">
                <div className="div">
                  <div className="streaming-nav-bar-2" />
                  <img className="streaming-icon-and" alt="Streaming icon and" src="../assets/HOMEPAGE/streaming-icon-and-text-first-page.png" />
                </div>
              </div>
              <div className="catering-nav-bar">
                <div className="overlap-2">
                <div className="catering-nav-bar-box" />
                <img className="UFC-RING-PIC-first" alt="Ufc RING PIC first" src="../../assets/HOMEPAGE/UFC-RING-PIC-3-first-page-background.png" />
                <img className="catering-icon-and" alt="Catering icon and" src="../assets/HOMEPAGE/catering-icon-and-text-streaming-page.png" />
                </div>
              </div>
              <div className="opinions-nav-bar">
                <div className="overlap-2">
                  <div className="opinions-nav-bar-box" />
                  <img className="opinions-icon-and" alt="Opinions icon and" src="../assets/HOMEPAGE/opinions-icon-and-text-first-page.png" />
                </div>
              </div>
              <div className="trending-nav-bar">
                <div className="overlap-3">
                <div className="opinions-nav-bar-box" />
                <img className="trending-icon-and" alt="Trending icon and" src="../assets/HOMEPAGE/trending-icon-and-text-streaming-page.png" />
                </div>
              </div>
            </div>
          </div>
          <div className="notfication-footer">
          <img className="send-invite-send" alt="Send invite send" src="../assets/HOMEPAGE/send-reminder-icon.png" />
          <img className="set-reminder-on" alt="Set reminder on" src="../assets/HOMEPAGE/set-reminder-on-device.png" />
          </div>
        </div>
      </div>
    </div>
  );
};