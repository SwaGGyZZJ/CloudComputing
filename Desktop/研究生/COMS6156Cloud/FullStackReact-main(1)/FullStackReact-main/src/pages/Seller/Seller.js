import React from 'react';
import ShowItem from "../../components/showItem/ShowItem";
import TopNav from "../../components/top-nav/TopNav";
import AddItem from "../../components/addItem/AddItem";
import {Link, Outlet} from "react-router-dom";
import storageUtils from "../../utils/storageUtils";
import classes from './seller.module.css';
const Seller = () => {
    return (
        <>
            <div className={classes.header}>

                Hello,<Link to={'profile'}>{storageUtils.getUser().username}!</Link>
                <TopNav/>
            </div>
            <div className={classes.navbar}>
                <Link to={'addItem'}>Add Item</Link>
                <Link to={'showItem'}>Show Item</Link>
            </div>
            <Outlet/>
            {/*<AddItem/>*/}
            {/*<ShowItem/>*/}

        </>
    );
};

export default Seller;