"use client";
import BloodBackground from "@/components/common/BloodBackground";
import Headline from "@/components/common/Headline";
import events from "@/database/events.json";
import { useState } from "react";
import Calendar from "./Calendar";
import EventDetails from "./EventDetails";

const EventsPage = ({ dictionary, lang }) => {
  const [selectedDate, setSelectedDate] = useState(1);

  return (
    <BloodBackground>
      <div className="container rounded-lg  px-3 opacity-75 py-12">
        <Headline header={dictionary.events} />
        <div className="grid gap-6">
          <Calendar
            selectedDate={selectedDate}
            lang={lang}
            setSelectedDate={setSelectedDate}
          />
          <EventDetails selectedDate={selectedDate} events={events} lang={lang}/>
        </div>
      </div>
    </BloodBackground>
  );
};

export default EventsPage;
