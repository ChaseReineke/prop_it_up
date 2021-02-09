import React, { useState } from 'react';

const PersonCard = props => {


    const [state, setState] = useState({
        ageCount: props.Age
    });


    const handleClick = () => {
        setState({
            ageCount: state.ageCount + 1
        })
    };

    const { FirstName, LastName, HairColor } = props
    return (
        <div>
            <h1>{LastName}, {FirstName}</h1>
            <h6>Age:{state.ageCount}</h6>
            <h6>Hair Color: {HairColor}</h6>
            <button onClick={handleClick}>Birthday For {FirstName} {LastName}</button>
        </div>
    );
}

export default PersonCard;