import React from "react";
import { Button } from "antd";
import '../App.css';

const LogOut = (props) => {
    const buttonStyle = { fontSize: '28px' }

    const logOut = () => {
        sessionStorage.removeItem("jwt");
        props.setIsAuth(false);
        props.closeDrawer();
    }

    return (
        <div>
            <Button
                type="text"
                size="large"
                onClick={logOut}
                style={buttonStyle}>
                Log Out
            </Button>
        </div>
    );
}
export default LogOut;
