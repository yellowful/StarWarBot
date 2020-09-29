import React from 'react'
import Card from './Card'


const CardList = ({allRobots,isPending}) => {
    // if(true){
    //     throw new Error('Noooooo')
    // }
    //如果robots還沒有資料，就顯示loading
    if (isPending){
        return<h1 className = 'tc'>Loading</h1>
    } else{        
        //如果robots有資料了，就把每個component回傳到cardComponent
        //console.log(allRobots);
        const cardComponent = allRobots.map(
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