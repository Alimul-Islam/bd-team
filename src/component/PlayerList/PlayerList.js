import React from 'react';

const PlayerList = (props) => {
    const cart = props.cart;
    let totalPlayer = [];
 for (let i = 0 ; i < cart.length; i++) {
     const player = cart[i];
     totalPlayer =  totalPlayer +" "+player.name;   
 }
   
    return (
        <div>
            <h3>Name of Selected Players:</h3>
            <p>{ totalPlayer}</p>
        </div>
    );
};

export default PlayerList;