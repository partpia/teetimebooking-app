import React, { useState } from "react";
import {
    EyeInvisibleOutlined,
    EyeTwoTone
} from '@ant-design/icons';
import { Input, Space } from 'antd';

const LogIn = () => {
    const [user, setUser] = useState({
        username: '',
        pwd: ''
    });

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    return (
        <Space direction="vertical" size="middle" className="log-in">
            <Input
                name="username"
                onChange={handleChange}
                size="large"
                placeholder="Username"
            />
            <Input.Password
                name="pwd"
                onChange={handleChange}
                size="large"
                placeholder="Password"
                iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            />
        </Space>
    );
}
export default LogIn;
