import React from "react";
import { Content } from "antd/lib/layout/layout";
import {
    Row,
    Tabs,
    Typography
} from 'antd';
import '../App.css';
import BookingCalendar from "./BookingCalendar";
import CalendarCourseTwo from "./CalendarCourseTwo";

const TeeTimeBooking = () => {
    const { Title } = Typography;
    const { TabPane } = Tabs;

    return (
        <Content className="tee-time-booking-content">
            <Row>
                <Title level={3}>Select course ... info </Title>
            </Row>
            <Tabs type="card">
                <TabPane tab="Course 18 holes" key="1">
                    <BookingCalendar />
                </TabPane>
                <TabPane tab="Course 9 holes" key="2">
                    <CalendarCourseTwo />
                </TabPane>
            </Tabs>
        </Content>
    );
}
export default TeeTimeBooking;
