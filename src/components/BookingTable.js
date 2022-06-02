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
        },
        {
          title: 'Bookings',
          key: 'bookedTeeTimesGolfers',
          dataIndex: 'bookedTeeTimes',
          width: 300,
          render: bookedTeeTimes => (
              bookedTeeTimes.map(time => (
                  <Avatar key={time.user.userId} size={42} style={{ backgroundColor: '#3D5B59', marginRight: '10px' }}>
                    {time.user.handicap}
                  </Avatar>)
              )
          ),
        },
        {
          title: 'HCP',
          key: 'bookedTeeTimesHcpSum',
          dataIndex: 'bookedTeeTimes',
          render: bookedTeeTimes => {
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
          render: bookedTeeTimes => (
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
