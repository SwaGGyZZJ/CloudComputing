import React, {useCallback, useContext, useEffect, useState} from 'react';
import {generalUrl, sellerUrl} from "../../urls/url";
import UserContext from "../../context/context";
import {useNavigate} from "react-router-dom";
import Cart from "../cart/Cart";
import ItemContext from "../../context/itemContext";
import classes from './showitem.module.css';
const ShowItem = () => {
    const usercxt = useContext(UserContext);
    const navigate = useNavigate();

    const [items,setItems] = useState({});
    const [isLoading,setIsLoading] = useState(true);

    const itemcxt = useContext(ItemContext);

    const fetchData = useCallback(async ()=> {
        if (usercxt.email === '') {
            navigate('/login');
        }
        const res = await fetch(`${generalUrl}/seller/show_item`, {
            method: 'POST',
            body: JSON.stringify({
                email: usercxt.email
            })
        });
        if (res.ok) {
            const response = await res.json();
            console.log(response);
            setItems(response);
            setIsLoading(false);
        }
    },[])

    useEffect(() => {
        fetchData();
    },[])



    return (
        <ItemContext.Provider value={{fetchData}}>
            <div className={classes.back}>
                {!isLoading&&<Cart Result={items}/>}
            </div>
        </ItemContext.Provider>
    );
};

export default ShowItem;