import React, { useState } from "react";
import {
    Button,
    message,
    Modal,
    Row,
} from 'antd';
import {
    CalendarOutlined,
    ClockCircleOutlined,
    EnvironmentOutlined,
    ExclamationCircleOutlined,
    PlusOutlined
} from '@ant-design/icons';
import '../App.css';
import { format } from 'date-fns';

const BookTeeTime = (props) => {
    const [teeTimeBooking, setTeeTimeBooking] = useState({
        user: {
            userId: 2,
        },
        teeTime: {
            teeTimeId: props.teeTime.teeTimeId,
        }
    })
    // TODO: change userId when authentication ready, now hardcoded
    const { confirm } = Modal;

    const confirmationModal = () => {
        confirm({
            title: 'Do you want to confirm your tee time?',
            icon: <ExclamationCircleOutlined />,
            okText: 'Book',
            content: (
                <>
                    <><EnvironmentOutlined /> &nbsp;{props.teeTime.course.name}</>
                    <br />
                    <><CalendarOutlined /> &nbsp;{format(new Date(props.teeTime.startDate), 'E d.M.yyyy')}</>
                    <br />
                    <><ClockCircleOutlined /> &nbsp;{props.teeTime.startTime}</>
                </>
            ),
            onOk() {
                bookTeeTime();
            },
            onCancel() { },
        });
    };

    const bookTeeTime = () => {
        try {
            fetch('http://localhost:8080/teetimebookings',
                {
                    method: 'POST',
                    headers: { 'Content-type': 'application/json' },
                    body: JSON.stringify(teeTimeBooking)
                })
            message
                .loading('Please wait ...', 2.5)
                .then(() => props.getTeeTimes(props.teeTime.startDate))
                .then(() => message.success('Tee time booked!', 3))
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Row>
            {props.teeTime.bookedTeeTimes.length < 4 && (
                <Button
                    onClick={confirmationModal}
                    type="primary"
                    shape="round"
                    icon={<PlusOutlined />}
                    size='middle'>
                    Book
                </Button>
            )}
        </Row>
    );
}
export default BookTeeTime;
