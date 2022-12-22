import React from 'react';
import TopNav from "../../components/top-nav/TopNav";
import {Link, Outlet} from "react-router-dom";
import storageUtils from "../../utils/storageUtils";
import Search from "../../components/search/Search";
import classes from './Customer.module.css';
const Customer = () => {
    return (
        <body>
        <div className={classes.header}>
                Hello,<Link to={'profile'}>{storageUtils.getUser().username}!</Link>
                <TopNav/>
        </div>

        <div className={classes.navbar}>
            <Link to={'/'}>Home</Link>
            <Link to={'CustomerSearch'}>Search new products!</Link>
            <Link to={'order'}>Your Cart</Link>
            <Link to={'history'}>history</Link>
        </div>
        <Outlet/>
        </body>
    );
};

export default Customer;