"use client";
import BloodBackground from "@/components/common/BloodBackground";
import Headline from "@/components/common/Headline";
import incidents from "@/database/incidents.json";
import { useState } from "react";
import Calendar from "./Calendar";
import IncidentDetails from "./IncidentDetails";

const IncidentsPage = ({ dictionary, lang }) => {
  const [selectedDate, setSelectedDate] = useState(1);

  return (
    <BloodBackground>
      <div className="container rounded-lg  px-3 opacity-75 py-12">
        <Headline header={dictionary.incidents} />
        <div className="grid gap-6">
          <Calendar
            selectedDate={selectedDate}
            lang={lang}
            setSelectedDate={setSelectedDate}
          />
          <IncidentDetails selectedDate={selectedDate} incidents={incidents} lang={lang}/>
        </div>
      </div>
    </BloodBackground>
  );
};

export default IncidentsPage;
