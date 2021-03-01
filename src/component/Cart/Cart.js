/* eslint-disable no-use-before-define */
import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
       let totalSalary = 0;
    for (let i = 0 ; i < cart.length; i++) {
        const player = cart[i];
        totalSalary =  totalSalary + player.salary;   
    }
   
    return (
        <div>
            <p>Total Salary: {totalSalary} BDT</p>
        </div>
    );
};

export default Cart; 