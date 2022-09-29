import React, { useState } from "react";
import {
    EyeInvisibleOutlined,
    EyeTwoTone,
    LoginOutlined
} from '@ant-design/icons';
import {
    Button,
    Input,
    Space
} from 'antd';
import { SERVER_URL } from "../constants";

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
                }
            })
            .catch(err => console.log(err))
    }

    // TODO: alert if login failed

    return (
        <Space direction="vertical" size="middle" className="log-in">
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
        </Space>
    );
}
export default LogIn;
