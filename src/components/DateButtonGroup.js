import React, { useEffect, useState } from "react";
import {
    Button,
    Radio,
    Row
} from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import {
    add,
    format,
    isAfter,
    isBefore,
    isEqual,
    parseISO,
    sub
} from 'date-fns';
import '../App.css';

const DateButtonGroup = (props) => {
    const today = format(new Date(), 'yyyy-MM-dd');
    const [buttonGroup, setButtonGroup] = useState([]);
    const [value, setValue] = useState(today);

    useEffect(() => handleDates(), []);

    const handleDates = () => {
        let day = new Date();
        let tempDates = [{
            label: 'Today', value: format(day, 'yyyy-MM-dd')
        }];
        for (let i = 1; i < 7; i++) {
            let date = add(day, { days: i, })
            tempDates.push({ label: format(date, 'E d.M.'), value: format(date, 'yyyy-MM-dd') })
        }
        setButtonGroup(tempDates);
    }
    const handleDateChange = (e) => {
        setValue(e.target.value);
        props.getTeeTimes(e.target.value);
    }
    // tee time bookings of the previous day
    const getPreviousDay = () => {
        let prevDate = sub(parseISO(value), { days: 1 });

        if (isAfter(prevDate, parseISO(today)) || isEqual(prevDate, parseISO(today))) {
            let formattedPrevDate = format(prevDate, 'yyyy-MM-dd')
            setValue(formattedPrevDate);
            props.getTeeTimes(formattedPrevDate);
        }
    }
    // tee time bookings of the next day
    const getNextDay = () => {
        let nextDate = add(parseISO(value), { days: 1, });
        let lastDate = parseISO(buttonGroup[6].value);
        
        if (isBefore(nextDate, lastDate) || isEqual(nextDate, lastDate)) {
            let formattedNextDate = format(nextDate, 'yyyy-MM-dd')
            setValue(formattedNextDate);
            props.getTeeTimes(formattedNextDate);
        }
    }

    return (
        <Row className="booking-calendar-buttons">
            <Button
                onClick={getPreviousDay}
                icon={<LeftOutlined />}
                size="large" />
            <Radio.Group
                options={buttonGroup}
                value={value}
                onChange={handleDateChange}
                optionType="button"
                size="large"
            />
            <Button
                onClick={getNextDay}
                icon={<RightOutlined />}
                size="large" />
        </Row>
    );
}
export default DateButtonGroup;
