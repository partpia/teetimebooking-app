import React, { useEffect, useState } from 'react';
import {
    Button,
    Divider,
    Form,
    Input,
    InputNumber,
    Layout,
    Select,
    Typography
} from 'antd';
import { SERVER_URL } from '../constants';
const { Paragraph, Title } = Typography;
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
        firstname: '',
        lastname: '',
        email: '',
        handicap: '',
        role: 'USER',
        member: {
            membershipId: null
        },
    });

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

    //TODO: register

    return (
        <Content className='sign-up-content'>
            <Divider orientation="center" plain>
                <Title
                    level={3}
                    className='sign-up-titles'>
                    Sign up
                </Title>
            </Divider>
            <Paragraph
                className='sign-up-titles'>
                Please fill in the form below.
            </Paragraph>
            <Form
                {...formItemLayout}
                form={form}
                name="register"
                scrollToFirstError>
                <Form.Item
                    name="firstname"
                    label="First name"
                    rules={[
                        {
                            required: true,
                            message: 'Please fill in your first name',
                        },
                    ]}>
                    <Input
                        name="firstname"
                        onChange={handleChange}
                    />
                </Form.Item>
                <Form.Item
                    name="lastname"
                    label="Last name"
                    rules={[
                        {
                            required: true,
                            message: 'Please fill in your last name',
                        },
                    ]}>
                    <Input
                        name="lastname"
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
                        placeholder="Please select a membership"
                        onChange={handleChange}>
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
                        name="handicap"
                        max="54"
                        step="0.1"
                        stringMode
                        onChange={handleChange}
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
                    <Button type="primary" htmlType="submit">
                        Register
                    </Button>
                </Form.Item>
            </Form>
        </Content>
    );
}
export default SignUp;
