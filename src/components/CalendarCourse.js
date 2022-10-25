import React, { useEffect, useState } from "react";
import { format } from 'date-fns';
import DateButtonGroup from "./DateButtonGroup";
import BookingTable from "./BookingTable";
import { SERVER_URL } from "../constants";
import '../App.css';

const CalendarCourse = (props) => {
  const [teeTimes, setTeeTimes] = useState([]);
  const today = format(new Date(), 'yyyy-MM-dd');
  const token = sessionStorage.getItem('jwt');

  useEffect(() => {
    getTeeTimes(today);
  }, []);

  const getTeeTimes = (date) => {
    setTeeTimes([]);
    try {
      fetch(SERVER_URL + `teetimes/courses/${props.courseId}/${date}`, {
        headers: { 'Authorization': token }
      })
        .then(response => response.json())
        .then(data => setTeeTimes(data))
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="calendar">
      <DateButtonGroup getTeeTimes={getTeeTimes} />
      <BookingTable teeTimes={teeTimes} getTeeTimes={getTeeTimes} />
    </div>
  );
}
export default CalendarCourse;
