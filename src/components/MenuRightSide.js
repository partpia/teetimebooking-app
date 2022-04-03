import React, { useState } from "react";
import { Drawer, Button } from "antd";
import { Link } from "react-router-dom";
import { MenuOutlined } from '@ant-design/icons';
import '../App.css';

const MenuRightSide = () => {
    const [visible, setVisible] = useState(false);
    const buttonStyle = { fontSize: '28px' }

    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };

    return (
        <div>
            <Button
                icon={<MenuOutlined />}
                onClick={showDrawer}
            />
            <Drawer title="" placement="right" onClose={onClose} visible={visible} className="nav-drawer">
                <Button
                    type="text"
                    size="large"
                    style={buttonStyle}>
                    <Link to="/teetimes">Book tee time</Link>
                </Button>
            </Drawer>

        </div>
    );

}
export default MenuRightSide;
