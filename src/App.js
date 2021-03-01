import React,{useEffect, useState} from 'react'
import './App.css';
import playerData from './Data/Data.json';
import PlayerInfo from './component/PlayerInfo/PlayerInfo';
import Cart from './component/Cart/Cart';
import PlayerList from './component/PlayerList/PlayerList';
import Header from './component/Header/Header';

function App() {
  const [player,setPlayer] = useState([]);
  const [cart,setCart] = useState([])

  useEffect(() =>{
    setPlayer(playerData);
    console.log(playerData);
    
       },[]);

       const handleAddPlayer = (player) =>{
         const newCart = [...cart,player];
         setCart(newCart);
         }

  return (

    <div className="App">
      <Header></Header>
       <h1>Total Players:{player.length}</h1>
       <h3>Selected Player: {cart.length}</h3>
       
       <PlayerList cart={cart}></PlayerList>
        <Cart cart={cart}></Cart>
      
        
       <ul>
    {
      player.map (player => <PlayerInfo player ={player} handleAddPlayer={handleAddPlayer}></PlayerInfo> )
    }
    </ul>
    </div>
  );
}

export default App;
