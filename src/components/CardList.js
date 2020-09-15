import React from 'react'
import Card from './Card'


const CardList = ({robots}) => {
    // if(true){
    //     throw new Error('Noooooo')
    // }
    //如果robots還沒有資料，就顯示loading
    if (!robots.length){
        return<h1 className = 'tc'>Loading</h1>
    } else{        
        //如果robots有資料了，就把每個component回傳到cardComponent
        const cardComponent = robots.map(
            (item) => {
                return (
                    <Card robot={item}/>
                )
            }
        )
            //把cardComponent畫出來
            return (
                <div>
                    {cardComponent}
                </div>
            )
    }
};

export default CardList;