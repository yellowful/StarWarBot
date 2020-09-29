import {
    FETCH_SWAPI_PENDING,
    FETCH_SWAPI_SUCCESS,
    FETCH_SWAPI_FAILED
} from './constants';

export const requestSwapi = (randomArray) => async (dispatch) => {
    //console.log(randomArray);
    dispatch({type:FETCH_SWAPI_PENDING});    
    //const getData = async (randomArray) => {
        try {
            let randomRobots = [];    
            for await (let randomNumber of randomArray){
                    let promiseFetch = await fetch(`https://swapi.dev/api/people/${randomNumber}/`);
                    let temp = await promiseFetch.json();
                    temp.id = randomNumber.toString()
                    //把抓回來的人物資料加上id
                    randomRobots.push(await temp);
            }
            
            //allRobots在這一行被更新，
            //用.concat()才不會之後不小心動到randomRobots的時候，
            //因為pass by reference而去動到this.state
            dispatch({
                type:FETCH_SWAPI_SUCCESS,
                payload:randomRobots.concat()
            });                
        } catch (error){
            dispatch({
                type:FETCH_SWAPI_FAILED,
                payload: error
            })
        }
    //getData(randomArray);

}