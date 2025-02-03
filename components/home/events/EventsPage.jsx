"use client"
import React, { useState, useEffect } from "react";
import Calendar from "./Calendar";
import EventDetails from "./EventDetails";
import events from "@/database/events.json"
import Headline from "@/components/common/Headline";
import BloodBackground from "@/components/common/BloodBackground";
const EventsPage = ({ dictionary, lang }) => {
    const [selectedDate, setSelectedDate] = useState(1);



    return (
        <BloodBackground>
           <div className="container p-3">
           <Headline header={dictionary.events}/>
            <div className=" flex flex-col md:flex-row gap-6 p-6 bg-[#f2f3f6d0] opacity-75 bg-opacity-45  rounded-lg">
                <Calendar selectedDate={selectedDate} lang={lang} setSelectedDate={setSelectedDate} />
                <EventDetails selectedDate={selectedDate} events={events} />
            </div>
           </div>
        </BloodBackground>
    );
};

export default EventsPage;
