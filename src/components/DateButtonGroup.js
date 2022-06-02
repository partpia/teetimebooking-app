import React, { useEffect, useState } from "react";
import {
    Button,
    Radio,
    Row
} from 'antd';
import '../App.css';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { add, format } from 'date-fns';

const DateButtonGroup = ( props ) => {
    const today = format(new Date(), 'yyyy-MM-dd');
    const [buttonGroup, setButtonGroup] = useState([]);
    const [value, setValue] = useState(today);

    useEffect(() => {
        handleDates();
    }, []);

    const handleDates = () => {
        let day = new Date();
        let tempDates = [{
            label: 'today', value: format(day, 'yyyy-MM-dd')
        }];
        for (let i = 1; i < 7; i++) {
            let date = add(day, { days: i, })
            tempDates.push({ label: format(date, 'E d.M'), value: format(date, 'yyyy-MM-dd') })
        }
        setButtonGroup(tempDates);
    }
    const handleDateChange = (e) => {
        setValue(e.target.value);
        props.getTeeTimes(e.target.value);
    }

    return (
        <Row className="booking-calendar-buttons">
            <Button
                icon={<LeftOutlined />}
                size="large"
                style={{ marginRight: 15 }} />
            <Radio.Group
                options={buttonGroup}
                value={value}
                onChange={handleDateChange}
                optionType="button"
                size="large"
            />
            <Button 
                icon={<RightOutlined />}
                size="large"
                style={{ marginLeft: 15 }} />
        </Row>
    );
}
export default DateButtonGroup;
