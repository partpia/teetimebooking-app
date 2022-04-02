import React from "react";
import { Button, PageHeader } from "antd";
import { Link } from "react-router-dom";
import MenuRightSide from "./MenuRightSide";

const TopHeader = () => {

    return (
        <PageHeader
            className="header"
            title="Riviera Maya del Sol Golf Club"
            subTitle="Sun is always shining and the greens are greener"
            extra={[
                <Button
                    key="signin"
                    type="text">
                    <Link to="/signup">Sign Up</Link>
                </Button>,
                <Button
                    key="login"
                    type="text">
                    <Link to="/login">Log In</Link>
                </Button>,
                <MenuRightSide key="menuright" />
            ]}
        />
    );
}
export default TopHeader;