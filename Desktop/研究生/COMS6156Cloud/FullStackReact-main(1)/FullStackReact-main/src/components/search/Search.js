import React, {useCallback, useEffect, useState} from 'react';
import Cart from "../cart/Cart";
import {generalUrl, sellerUrl} from "../../urls/url";
import {useLocation} from "react-router-dom";
const Search = () => {


    const location = useLocation();
    const initialContent = location.state;

    const [withSearchResult,setWithSearchResult] = useState(false);
    const [searchContent,setSearchContent] = useState({
        content:initialContent?initialContent.name:'',
        order:true, // true represents ascending
        lowestPrice:0,
        highestPrice:1000000
    });

    const [searchResult,setSearchResult] = useState('');

    const searchChangeHandler = (event) => {
        setSearchContent({
            ...searchContent,
            content: event.target.value
        })
    }

    const orderChangeHandler = (event) => {
        setSearchContent({
            ...searchContent,
            order:event.target.value
        })
    }

    const lowestPriceChangeHandler = (event) =>{
        setSearchContent({
            ...searchContent,
            lowestPrice: event.target.value,
        })
    }

    const highestPriceChangeHandler = (event) => {
        setSearchContent({
            ...searchContent,
            highestPrice: event.target.value
        })
    }

    const fetchData = useCallback(async ()=>{
        setWithSearchResult(false);
        const res = await fetch(`${generalUrl}/customer/search`,{
            method:'POST',
            body:JSON.stringify({
                search_details:searchContent.content,
                filter_conditions:{
                    lowest_price:searchContent.lowestPrice,
                    highest_price:searchContent.highestPrice,
                    order:searchContent.order
                }
            })
        });
        if(res.ok){
            const data = await res.json();
            setSearchResult(data);
            setWithSearchResult(true);
        }
    },[])
    useEffect(()=>{
        fetchData();
    },[])

    const submitFormHandler = async (e) => {
        e.preventDefault();
        if (searchContent.highestPrice < searchContent.lowestPrice) {
            alert('illegal filter!');
        }
        if(searchContent.lowestPrice === ''){
            setSearchContent({
                ...searchContent,
                lowestPrice: 0
            })
        }
        if(searchContent.highestPrice===''){
            setSearchContent({
                ...searchContent,
                highestPrice: 1000000,
            })
        }
        console.log(searchContent);
        setWithSearchResult(false);
        const res = await fetch(`${sellerUrl}/customer/search`,{
            method:'POST',
            body:JSON.stringify({
                search_details:searchContent.content,
                filter_conditions:{
                    lowest_price:searchContent.lowestPrice,
                    highest_price:searchContent.highestPrice,
                    order:searchContent.order
                }
            })
        });
        if(res.ok){
            const data = await res.json();
            setSearchResult(data);
            setWithSearchResult(true);
        }
    }


    return (
        <div>
            <form onSubmit={submitFormHandler} className='navbar' >
                <a><label htmlFor="Search">Search:</label></a>
                <a><input type="text" placeholder={'please enter a product'} defaultValue={searchContent.content} onChange={searchChangeHandler} id={'Search'}/></a>
                <a><label htmlFor="Filter">Order</label></a>
                <a><select name="" id="" onChange={orderChangeHandler}>
                    <option value={"increasing_order"}>From low to high</option>
                    <option value={"decreasing_order"}>From high to low</option>
                </select></a>
                <a><label htmlFor="">Price range</label></a>
                <a>from <input type="number" onChange={lowestPriceChangeHandler}
                            placeholder={0}/>to<input type="number" onChange={highestPriceChangeHandler}
                                                      placeholder={0}/></a>
                <button type={"submit"} className='button'>Search</button>
            </form>
            {withSearchResult && <Cart Result={searchResult}/>}
        </div>
    );
};

export default Search;