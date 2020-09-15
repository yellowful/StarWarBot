import React from 'react';
const Card = ({robot}) => {
    const {name,height,mass,birth_year,gender} = robot;
    //畫出單一隻robot
    return(
        <div className = 'bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt = 'robots' src = {`https://robohash.org/${name}?200x200`}></img>
            <div>
                <h2>{name} </h2>
                <p>height: {height} cm </p>
                <p>mass: {mass} kg </p>
                <p>birth year: {birth_year}</p>
                <p>gender: {gender}</p>
            </div>
        </div>
    );
}

export default Card;