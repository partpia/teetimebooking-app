import React from "react";
import {
  Avatar,
  Row,
  Table,
} from 'antd';
import '../App.css';
import BookTeeTime from "./BookTeeTime";

const BookingTable = ( props ) => {

    const columns = [
        {
          title: 'Tee time',
          dataIndex: 'startTime',
          key: 'startTime',
          width: 120,
          align: 'center',         
          render: (startTime) => {
            return startTime.substring(0, 5);
          }
        },
        {
          title: 'Bookings',
          key: 'bookedTeeTimesGolfers',
          dataIndex: 'bookedTeeTimes',
          width: 325,
          render: (bookedTeeTimes) => (
              bookedTeeTimes.map(time => (
                  <Avatar key={time.user.userId} size={42} className="booking-avatars">
                    {time.user.handicap}
                  </Avatar>)
              )
          ),
        },
        {
          title: 'HCP',
          key: 'bookedTeeTimesHcpSum',
          dataIndex: 'bookedTeeTimes',
          width: 120,
          align: 'center',
          render: (bookedTeeTimes) => {
            let hcp = 0.0;
            bookedTeeTimes.map((time) => {
              hcp += time.user.handicap;
            })
            return (
              <>{hcp.toFixed(2)}</>
            );
          }
        },
        {
          title: '',
          key: 'book',
          width: 160,
          align: 'center',
          render: (bookedTeeTimes) => (
            <BookTeeTime teeTime={bookedTeeTimes} getTeeTimes={props.getTeeTimes}/>
          ),
        },
      ];

    return (
        <Row className="booking-table">
            <Table
                columns={columns}
                dataSource={props.teeTimes}
            />
        </Row>
    );
}
export default BookingTable;
