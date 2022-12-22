import React, {useContext} from 'react';
import {useNavigate} from "react-router-dom";
import storageUtils from "../../utils/storageUtils";
import {useGoogleLogout} from "react-google-login";
import UserContext from "../../context/context";
import './Logout.css'
const clientID = '211959893244-lbduhp27rkejtrpvdffqliqutgpn55bf.apps.googleusercontent.com';
const Logout = () => {
    const navigate = useNavigate();
    const usercxt = useContext(UserContext);
    const {signOut,loaded} = useGoogleLogout({});

    const logoutHandler = () =>{
        storageUtils.removeUser();
        usercxt.email = '';
        usercxt.username = '';
        usercxt.address = '';
        usercxt.identity = true;
        signOut();
        navigate('/login');
    }
    return (
            <button onClick={logoutHandler} className='button'>logout</button>
    );
};

export default Logout;