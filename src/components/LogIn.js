import React, { useState } from "react";
import {
    EyeInvisibleOutlined,
    EyeTwoTone,
    LoginOutlined
} from '@ant-design/icons';
import {
    Button,
    Input,
    message,
    Space,
    Typography
} from 'antd';
import { Link } from "react-router-dom";
import { SERVER_URL } from "../constants";
import '../App.css';
const { Title } = Typography;

const LogIn = (props) => {
    const [user, setUser] = useState({
        username: '',
        password: ''
    });

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const logIn = () => {
        fetch(SERVER_URL + 'login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        })
            .then(response => {
                const jwtToken = response.headers.get('Authorization');

                if (jwtToken !== null) {
                    sessionStorage.setItem("jwt", jwtToken);
                    props.setIsAuth(true);
                } else {
                    message.error('Please check your username and password.', 6);
                }
            })
            .catch(err => message.error('Something went wrong. Try again later.', 6))
    }

    return (
        <Space direction="vertical" className="log-in">
            <Title level={4}>Log in and book tee times</Title>
            <Input
                name="username"
                onChange={handleChange}
                size="large"
                placeholder="Username"
            />
            <Input.Password
                name="password"
                onChange={handleChange}
                size="large"
                placeholder="Password"
                iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            />
            <Button
                icon={<LoginOutlined />}
                size='large'
                className='log-in-button'
                onClick={logIn}>
                Log In
            </Button>
            <Title level={5} className="margin-top-m">
                Don't have an account?
            </Title>
            <Button
                key="signup"
                onClick={props.closeDrawer}>
                <Link to="/signup">Sign Up</Link>
            </Button>
        </Space>
    );
}
export default LogIn;
