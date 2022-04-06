import React, { useRef } from "react";
import { Content } from "antd/lib/layout/layout";
import {
    Button,
    Card,
    Col,
    Divider,
    Image,
    Row,
    Typography
} from 'antd';
import {
    ArrowRightOutlined,
    FieldTimeOutlined,
    FireOutlined,
    StarOutlined,
    TeamOutlined
} from '@ant-design/icons';
import { Link } from "react-router-dom";

const PageContent = () => {
    const { Title } = Typography;
    const myRef = useRef(null);

    const executeScroll = () => myRef.current.scrollIntoView({ behavior: "smooth" });

    return (
        <Content className="get-started-main">
            <Row className="get-started-main-col">
                <Col xs={20} sm={16} lg={8} offset={2} style={{ marginTop: '20px' }}>
                    <Card bodyStyle={{ margin: '10px' }}>
                        <Title>Welcome to Riviera Maya del Sol Golf Club's Online Tee Time Booking</Title>
                        <Divider orientation="left">First time here?</Divider>
                        <Button
                            size="large"
                            style={{ float: "right", borderColor: '#3B9778' }}
                            onClick={executeScroll}>
                            Get Started
                            <ArrowRightOutlined />
                        </Button>
                    </Card>
                </Col>
            </Row>
            <Row className="get-started-main-card-group">
                <Col span={6} className="card-group">
                    <Card className="card-group-card-uneven">
                        <TeamOutlined style={{ fontSize: '60px', color: '#138B83', marginBottom: '10px' }} />
                        <Title level={2}>12 754</Title>
                        <Title level={4}>Members</Title>
                    </Card>
                </Col>
                <Col span={6} className="card-group">
                    <Card className="card-group-card-even">
                        <FireOutlined style={{ fontSize: '60px', color: '#138B83', marginBottom: '10px' }} />
                        <Title level={2}>27</Title>
                        <Title level={4}>Holes</Title>
                    </Card>
                </Col>
                <Col span={6} className="card-group">
                    <Card className="card-group-card-uneven">
                        <FieldTimeOutlined style={{ fontSize: '60px', color: '#138B83', marginBottom: '10px' }} />
                        <Title level={2}>185 000</Title>
                        <Title level={4}>Booked tee times</Title>
                    </Card>
                </Col>
                <Col span={6} className="card-group">
                    <Card className="card-group-card-even">
                        <StarOutlined style={{ fontSize: '60px', color: '#138B83', marginBottom: '10px' }} />
                        <Title level={2}>4.6</Title>
                        <Title level={4}>Customer satisfaction</Title>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <Image
                        width="auto"
                        src="https://images.unsplash.com/photo-1543105177-748ceda71741?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                        preview={false} />
                </Col>
                <Col span={12} ref={myRef} className="get-started-info">
                    <Divider orientation="left" plain>
                        <Title level={1}>How to get started?</Title>
                    </Divider>
                    <Title level={2} className="info-title">1<Link to="/signup"><span className="info-text">Create an account</span></Link></Title>
                    <Title level={2} className="info-title">2<Link to="/login"><span className="info-text">Log in</span></Link></Title>
                    <Title level={2} className="info-title">3<span className="info-text">Book a tee time</span></Title>
                    <Title level={2} className="info-title">4<span className="info-text">Enjoy the play!</span></Title>
                </Col>
            </Row>
        </Content>
    );
}
export default PageContent;
