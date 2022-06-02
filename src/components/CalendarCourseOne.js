import React, { useEffect, useState } from "react";
import { format } from 'date-fns';
import '../App.css';
import DateButtonGroup from "./DateButtonGroup";
import BookingTable from "./BookingTable";

const CalendarCourseOne = () => {
  const [teeTimes, setTeeTimes] = useState([]);
  const today = format(new Date(), 'yyyy-MM-dd');

  useEffect(() => {
    getTeeTimes(today);
  }, []);

  const getTeeTimes = (date) => {
    setTeeTimes([]);
    try {
      fetch(`http://localhost:8080/teetimes/courses/1/${date}`)
        .then(response => response.json())
        .then(data => setTeeTimes(data))
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="">
      <DateButtonGroup getTeeTimes={getTeeTimes} />
      <BookingTable teeTimes={teeTimes} getTeeTimes={getTeeTimes} />
    </div>
  );
}
export default CalendarCourseOne;
