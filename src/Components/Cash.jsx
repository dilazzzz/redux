import React from 'react';
import {useDispatch, useSelector} from "react-redux";

const Cash = () => {

    const dispatch = useDispatch()
    const {cash} = useSelector(state => state.cash)


    const addCash = (value) => {
        dispatch({type:"SET_CASH", cash: cash + value})
    }

    const getCash = (value) => {
        dispatch({type:"SET_CASH", cash: cash - value})
    }

    return (
        <div>
            <h1>{cash}</h1>
            <button onClick={() => getCash(Number(prompt()))}>GET</button>
            <button onClick={() => addCash(Number(prompt()))}>ADD</button>
        </div>
    );
};

export default Cash;