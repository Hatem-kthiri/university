import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

function Calendar() {
  const [events, setEvents] = useState([
    {
      title: 'All Day Event',
      start: '2017-11-01',
      className: 'b-l b-2x b-greensea'
    },
    // Ajoutez d'autres événements ici...
  ]);

  useEffect(() => {
    // Initialise FullCalendar
    const calendar = new FullCalendar.Calendar(document.getElementById('calendar'), {
      plugins: [ dayGridPlugin, interactionPlugin ],
      header: {
        left: 'prev',
        center: 'title',
        right: 'next'
      },
      defaultDate: '2017-11-12',
      editable: true,
      droppable: true,
      drop: function() {
        if ($('#drop-remove').is(':checked')) {
          $(this).remove();
        }
      },
      eventLimit: true,
      events: events
    });

    // Previous month action
    $('#cal-prev').click(function(){
      calendar.prev();
    });

    // Next month action
    $('#cal-next').click(function(){
      calendar.next();
    });

    // Change to month view
    $('#change-view-month').click(function(){
      calendar.changeView('dayGridMonth');
    });

    // Change to week view
    $('#change-view-week').click(function(){
      calendar.changeView('timeGridWeek');
    });

    // Change to day view
    $('#change-view-day').click(function(){
      calendar.changeView('timeGridDay');
    });

    // Change to today view
    $('#change-view-today').click(function(){
      calendar.today();
    });

    calendar.render();

    return () => {
      calendar.destroy();
    };
  }, [events]);

  return (
    <div>
      <div id="calendar"></div>
      {/* Ajoutez d'autres éléments de contrôle ici... */}
    </div>
  );
}

export default Calendar;
