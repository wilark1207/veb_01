"use client"

import { Calendar, View, Views, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { calendarEvents } from "@/lib/data";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState } from "react";

const localizer = momentLocalizer(moment);

const BigCalendar = () => {
    const [view,setView] = useState<View>(Views.WEEK)

    const handleOnChangeView = (selectedView:View)=>{
        setView(selectedView);
    }

    return (
        <Calendar
            localizer={localizer}
            events={calendarEvents}
            startAccessor="start"
            endAccessor="end"
            views={["week","day"]}
            view={view}
            style={{ height: "98%" }}
            onView = {handleOnChangeView}
            min={new Date(2025,1,0,10,0,0)}
            max={new Date(2025,1,0,22,0,0)}
        />
    );
}

export default BigCalendar;