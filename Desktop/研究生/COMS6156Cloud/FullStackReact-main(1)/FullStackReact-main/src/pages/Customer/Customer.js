import React from 'react';
import TopNav from "../../components/top-nav/TopNav";
import {Link, Outlet} from "react-router-dom";
import storageUtils from "../../utils/storageUtils";
import Search from "../../components/search/Search";
import './Customer.css';
const Customer = () => {
    return (
        <body>
        <div className='header'>
                Hello,<Link to={'profile'}>{storageUtils.getUser().username}!</Link>
                <TopNav/>
        </div>

        <div className='navbar'>
            <a><Link to={'/'}>Home</Link></a>
            <a><Link to={'CustomerSearch'}>Search new products!</Link></a>
            <a><Link to={'order'}>Your Cart</Link></a>
            <a><Link to={'history'}>history</Link></a>
        </div>
        <Outlet/>
        </body>
    );
};

export default Customer;