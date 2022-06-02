import React from "react";
import { Content } from "antd/lib/layout/layout";
import {
    Alert,
    Col,
    Divider,
    Tabs,
    Typography
} from 'antd';
import '../App.css';
import CalendarCourseOne from "./CalendarCourseOne";
import CalendarCourseTwo from "./CalendarCourseTwo";

const TeeTimeBooking = () => {
    const { Title, Paragraph } = Typography;
    const { TabPane } = Tabs;

    return (
        <Content className="tee-time-booking-content">
            <Col className="tee-time-booking-info">
                <Title level={3}>Select course</Title>
                <Divider className="divider-style"></Divider>
                <Alert
                message="HCP limits"
                description="The maximum Handicap Index is 54 for men and women in both courses. Group's maximum HCP is 110."
                type="info"
                showIcon
            />
            </Col>

            <Tabs type="card">
                <TabPane tab="Course 18 holes" key="1" className="tee-time-booking-tab">
                    <CalendarCourseOne />
                </TabPane>
                <TabPane tab="Course 9 holes" key="2">
                    <CalendarCourseTwo />
                </TabPane>
            </Tabs>
        </Content>
    );
}
export default TeeTimeBooking;
