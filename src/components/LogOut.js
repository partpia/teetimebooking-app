import React from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import '../App.css';

const LogOut = (props) => {
    const buttonStyle = { fontSize: '28px' }
    let navigate = useNavigate();

    const logOut = () => {
        sessionStorage.removeItem("jwt");
        props.setIsAuth(false);
        props.closeDrawer();
        navigate("/");
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
