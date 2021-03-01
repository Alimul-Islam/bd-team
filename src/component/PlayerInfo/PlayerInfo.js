import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'

const PlayerInfo = (props) => {
    const {name, salary, image} = props.player;
    const PlayerStyle ={border: '1px solid gray',
    margin:'10px ', padding: '10px',borderRadius:"1000px"}
     const imageStyle ={ height: '150px'}
     const clearBoth ={clear: 'both'}
    const handleAddPlayer =props.handleAddPlayer;
    return (
        <div style={PlayerStyle}>
            <h1>{name}</h1>
            <h2>Salary: {salary}</h2>
            <img style={imageStyle} src= {image} alt=""/>
            <div style={clearBoth}></div>
            <button onClick={ () => handleAddPlayer(props.player)}> <FontAwesomeIcon icon={faUserPlus}/> Add Player</button>
        </div>
    );
};

export default PlayerInfo;