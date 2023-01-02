import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import Style from '../components/calendar.module.css'
import { useRef } from "react";
const Calendar = () => {
  const calendarRef = useRef(null);
  return (
      
    <FullCalendar
    //   aspectRatio={1}
       height={'100%'}
    //  contentHeight={250}
    
    dragScroll ={true}
    
    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
    initialView="dayGridWeek"
      editable
      selectable
    />
  

    
  
  );
};

export default Calendar;