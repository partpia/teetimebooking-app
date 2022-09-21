import React from "react";
import {
    Button,
    Col,
    Layout,
    Row,
    Space,
    Tooltip,
    Typography
} from 'antd';
import {
    FacebookFilled,
    InstagramFilled,
    MailOutlined,
    PhoneOutlined,
    PushpinOutlined,
    TwitterSquareFilled,
    WhatsAppOutlined,
    YoutubeFilled
} from '@ant-design/icons';
const { Text } = Typography;
const { Footer } = Layout;

const PageFooter = () => {
    return (
        <Footer
            className="footer">
            <Row>
                <Col span={8}>
                    <Space direction="vertical">
                        <Text className="footer-title">Riviera Maya del Sol Golf Club</Text>
                        <Text className="footer-contact-info">
                            <PushpinOutlined className="footer-contact-info-icons" />
                            Sunset Boulevard
                        </Text>
                        <Text className="footer-contact-info">
                            <PhoneOutlined className="footer-contact-info-icons" />
                            +111 101 101 11
                        </Text>
                        <Text className="footer-contact-info">
                            <MailOutlined className="footer-contact-info-icons" />
                            caddiemaster@gc-rivieramayadelsol.com
                        </Text>
                    </Space>
                </Col>
                <Col span={8} offset={8} className="social-media-icons-group">
                    <Space size={"large"}>
                        <Tooltip title="Facebook">
                            <Button
                                type="text"
                                icon={<FacebookFilled
                                    style={{ color: '#EBE8E0', fontSize: 46 }} />}
                                size='large'
                                href="https://www.facebook.com/"
                                target="_blank"
                            />
                        </Tooltip>
                        <Tooltip title="Instagram">
                            <Button
                                type="text"
                                icon={<InstagramFilled
                                    style={{ color: '#EBE8E0', fontSize: 46 }} />}
                                size='large'
                                href="https://www.instagram.com/"
                                target="_blank"
                            />
                        </Tooltip>
                        <Tooltip title="YouTube">
                            <Button
                                type="text"
                                icon={<YoutubeFilled
                                    style={{ color: '#EBE8E0', fontSize: 46 }} />}
                                size='large'
                                href="https://www.youtube.com/"
                                target="_blank"
                            />
                        </Tooltip>
                        <Tooltip title="Twitter">
                            <Button
                                type="text"
                                icon={<TwitterSquareFilled
                                    style={{ color: '#EBE8E0', fontSize: 46 }} />}
                                size='large'
                                href="https://twitter.com/?lang=en"
                                target="_blank"
                            />
                        </Tooltip>
                        <Tooltip title="WhatsApp">
                            <Button
                                type="text"
                                icon={<WhatsAppOutlined
                                    style={{ color: '#EBE8E0', fontSize: 46 }} />}
                                size='large'
                            />
                        </Tooltip>
                    </Space>
                </Col>
            </Row>
        </Footer>
    );
}
export default PageFooter;
