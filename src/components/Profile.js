import React, { useEffect, useState } from "react";
import { SERVER_URL } from "../constants";

const Profile = () => {
    const [user, setUser] = useState({});

    useEffect(() => getUserDetails(), []);

    const getUserDetails = () => {
        const token = sessionStorage.getItem('jwt');

        try {
            fetch(SERVER_URL + 'account', {
                headers: { 'Authorization': token }
            })
                .then(response => response.json())
                .then(data => setUser(data))
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            Profile information coming soon.
        </div>
    )
}
export default Profile;
