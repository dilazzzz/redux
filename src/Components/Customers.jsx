import React from 'react';
import {useDispatch, useSelector} from "react-redux";

const Customers = () => {

    const dispatch = useDispatch()
    const {customers} = useSelector(state => state.customers)


   const getAllCustomers = () => {
       fetch('https://jsonplaceholder.typicode.com/users')
           .then(response => response.json())
           .then(result => dispatch({type:"SET_CUSTOMERS", customers: result.map(res => res)}))
   }

    const addCustomers = (name) => {
        const newCustomer = {
            name,
            id: Date.now()

        }

        dispatch({type:"SET_CUSTOMERS", customers: [...customers, newCustomer]})
    }

    const removeCustomers = (id) => {
        dispatch({type:"SET_CUSTOMERS", customers: customers.filter( customer => customer.id !== id)})
    }

    return (
        <div>
            <button onClick={() => addCustomers(prompt())}>ADD CUSTOMER</button>
            <button onClick={getAllCustomers}>GET ALL CUSTOMERS</button>
            {customers.length > 0 ?
                <>
                    {customers.map( customer => {
                        return (
                            <div key={customer.id}>
                                <h1>{customer.name}</h1>
                                <button onClick={() => removeCustomers(customer.id)}>REMOVE CUSTOMER</button>
                            </div>
                        )
                    })}
                </>
                :
                <h2>Пользователи не найдены</h2>
            }
        </div>
    );
};

export default Customers;