import React, { useEffect, useState } from 'react';
import {
    Button,
    Col,
    Form,
    Input,
    InputNumber,
    Layout,
    message,
    Row,
    Select,
    Typography
} from 'antd';
import { useNavigate } from "react-router-dom";
import { SERVER_URL } from '../constants';
const { Paragraph } = Typography;
const { Option } = Select;
const { Content } = Layout;

const formItemLayout = {
    labelCol: {
        xs: { span: 24, },
        sm: { span: 6, },
    },
    wrapperCol: {
        xs: { span: 24, },
        sm: { span: 12, },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};

const SignUp = () => {
    const [form] = Form.useForm();
    const [memberships, setMemberships] = useState([]);
    const [user, setUser] = useState({
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        email: '',
        handicap: '',
        role: 'USER',
        member: {
            membershipId: ""
        }
    });
    let navigate = useNavigate();

    useEffect(() => getMemberships(), []);

    const getMemberships = () => {
        try {
            fetch(SERVER_URL + 'memberships')
                .then(response => response.json())
                .then(data => setMemberships(data))
        } catch (error) {
            console.log(error);
        }
    }

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const registerNewUser = () => {
        try {
            fetch(SERVER_URL + "register", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(user)
            })
                .then(response => {
                    if (response.ok) {
                        message.success('Account created, please sign in!')
                        navigate("/");
                    } else {
                        switch (response.status) {
                            case 406:
                                message.error('Something went wrong! Please try again.');
                                break;
                            case 409:
                                message.error('Usename taken! Please select an other username.');
                                break;
                            case 422:
                                message.error('Email already in use! Please insert an other email.');
                                break;
                            default:
                                message.error('Something went wrong! Please try again later.')
                        }
                    }
                })
        } catch (error) {
            message.error('Something went wrong! Please try again later.')
        }
    }

    return (
        <Content className='sign-up-content'>
            <Row>
                <Col span={8} className="sign-up-left-col">
                    <Paragraph className='create-account-title'>Create Account</Paragraph>
                </Col>
                <Col span={16} className='sign-up-right-col'>
                    <Paragraph className='create-account-text'>Please fill in the form below</Paragraph>
                    <Form
                        {...formItemLayout}
                        form={form}
                        name="register"
                        scrollToFirstError
                        className='sign-up-form'>
                        <Form.Item
                            name="firstName"
                            label="First name"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please fill in your first name',
                                },
                            ]}>
                            <Input
                                name="firstName"
                                onChange={handleChange}
                            />
                        </Form.Item>
                        <Form.Item
                            name="lastName"
                            label="Last name"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please fill in your last name',
                                },
                            ]}>
                            <Input
                                name="lastName"
                                onChange={handleChange}
                            />
                        </Form.Item>
                        <Form.Item
                            name="email"
                            label="E-mail"
                            rules={[
                                {
                                    type: 'email',
                                    message: 'The input is not valid e-mail!',
                                },
                                {
                                    required: true,
                                    message: 'Please fill in your e-mail!',
                                },
                            ]}>
                            <Input
                                name="email"
                                onChange={handleChange}
                            />
                        </Form.Item>
                        <Form.Item
                            name="member"
                            label="Membership"
                            hasFeedback
                            rules={[
                                {
                                    required: true,
                                    message: 'Please select your membership',
                                },
                            ]}>
                            <Select
                                value={user.member.membershipId}
                                placeholder="Please select a membership"
                                onChange={e => setUser({
                                    ...user, member: {
                                        membershipId: e.toString()
                                    }
                                })}>
                                {memberships.map((item, index) => {
                                    return (
                                        <Option value={item.membershipId} key={item.membershipId}>
                                            {item.golfClubName}
                                        </Option>)
                                })}
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="handicap"
                            label="HCP"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please fill in your handicap',
                                },
                            ]}>
                            <InputNumber
                                onInput={e => setUser({
                                    ...user, handicap: e
                                })}
                                max="54"
                                step="0.1"
                                stringMode
                                style={{ width: 80 }}
                            />
                        </Form.Item>
                        <Form.Item
                            name="username"
                            label="Username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please fill in your username',
                                },
                            ]}>
                            <Input
                                name="username"
                                onChange={handleChange}
                            />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            label="Password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please fill in your password!',
                                },
                            ]}
                            hasFeedback>
                            <Input.Password
                                name="password"
                                onChange={handleChange}
                            />
                        </Form.Item>
                        <Form.Item
                            name="confirm"
                            label="Confirm Password"
                            dependencies={['password']}
                            hasFeedback
                            rules={[
                                {
                                    required: true,
                                    message: 'Please confirm your password!',
                                },
                                ({ getFieldValue }) => ({
                                    validator(_, value) {
                                        if (!value || getFieldValue('password') === value) {
                                            return Promise.resolve();
                                        }
                                        return Promise.reject(new Error('The two passwords that you entered do not match!'));
                                    },
                                }),
                            ]}>
                            <Input.Password />
                        </Form.Item>
                        <Form.Item {...tailFormItemLayout}>
                            <Button
                                type="primary"
                                htmlType="submit"
                                shape="round"
                                size="large"
                                onClick={registerNewUser}
                                className="custom-button-l-green">
                                Sign up
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </Content>
    );
}
export default SignUp;
