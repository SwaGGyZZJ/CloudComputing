import React from 'react';
import ShowItem from "../../components/showItem/ShowItem";
import TopNav from "../../components/top-nav/TopNav";
import AddItem from "../../components/addItem/AddItem";
import {Link, Outlet} from "react-router-dom";
import storageUtils from "../../utils/storageUtils";

const Seller = () => {
    return (
        <body>
            <div className='header'>

                Hello,<Link to={'profile'}>{storageUtils.getUser().username}!</Link>
                <TopNav/>
            </div>
            <div className='navbar'>
                <a><Link to={'addItem'}>Add Item</Link></a>
                <a><Link to={'showItem'}>Show Item</Link></a>
            </div>
            <Outlet/>
            {/*<AddItem/>*/}
            {/*<ShowItem/>*/}

        </body>
    );
};

export default Seller;