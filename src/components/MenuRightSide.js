import React, { useState } from "react";
import { Drawer, Button } from "antd";

const MenuRightSide = () => {
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };


    return (
        <div>
            <Button type="primary" onClick={showDrawer}>
                Menu
            </Button>
            <Drawer title="Basic Drawer" placement="right" onClose={onClose} visible={visible}>
                <p>Some contents...</p>
            </Drawer>

        </div>
    );

}
export default MenuRightSide;