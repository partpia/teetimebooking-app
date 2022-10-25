import React from "react";
import { Content } from "antd/lib/layout/layout";
import {
    Col,
    Row,
    Space,
    Tabs,
    Typography
} from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import '../App.css';
import CalendarCourseOne from "./CalendarCourseOne";
import CalendarCourseTwo from "./CalendarCourseTwo";

const TeeTimeBooking = () => {
    const { Paragraph } = Typography;
    const { TabPane } = Tabs;

    return (
        <Content className="tee-time-booking-content">
            <Row align="top">
                <Col span={12} className="tee-time-booking-info-col-left">
                    <Paragraph className="tee-time-booking-info-p">Select course and book a tee time</Paragraph>
                </Col>
                <Col span={12} className="tee-time-booking-info-col-right">
                    <Space direction="vertical" className="tee-time-booking-hcp-info">
                        <Paragraph >
                            <InfoCircleOutlined />&nbsp;
                            HCP limits
                        </Paragraph>
                        <Paragraph>
                            The maximum Handicap Index is 54 for men and women in both courses. Group's maximum HCP is 110.
                        </Paragraph>

                    </Space>
                </Col>
            </Row>
            <Tabs
                type="card"
                size="large"
                className="test"
                tabBarGutter={8}>
                <TabPane tab="Holy Round 18 holes" key="1" className="tee-time-booking-tab">
                    <CalendarCourseOne />
                </TabPane>
                <TabPane tab="Half of Joy 9 holes" key="2" className="tee-time-booking-tab">
                    <CalendarCourseTwo />
                </TabPane>
            </Tabs>
        </Content >
    );
}
export default TeeTimeBooking;
