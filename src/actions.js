import {
    RANDOM_SWAPI_PENDING,
    RANDOM_SWAPI_SUCCESS,
    RANDOM_SWAPI_FAILED,
    SEARCH_SWAPI_PENDING,
    SEARCH_SWAPI_SUCCESS,
    SEARCH_SWAPI_FAILED
} from './constants';

export const requestRandomSwapi = (randomArray) => async (dispatch) => {
    //console.log(randomArray);
    dispatch({type:RANDOM_SWAPI_PENDING});    
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
                type:RANDOM_SWAPI_SUCCESS,
                payload:randomRobots.concat()
            });                
        } catch (error){
            dispatch({
                type:RANDOM_SWAPI_FAILED,
                payload: error
            })
        }
}

export const requestSearchSwapi = (searchField) => async (dispatch) => {
    // 必須要用arrow function這個ES6的語法
    // 否則this不會被正確bind住，會是undefined
    dispatch({type:SEARCH_SWAPI_PENDING});
    try {
        //console.log('action searchfield',searchField)
        const promiseFetch = await fetch(`https://swapi.dev/api/people/?search=${searchField}`);
        let temp = await promiseFetch.json();
        //抓回來的一群資料放到results裡
        const {results} = await temp;
        //把資料加上id
        for await (let result of results){
            result.id = await result.url.split('/')[5];
        
        //這行必須放在async裡面，才會被正確的執行
        //因為results是個promise，所以this.setState如果放在async外面，接受searchData所return的result
        //將會更新為一個promise，不會再管result是不是會再更新了
        //放這裏的話，this.setState就會等results更新時，才更新allRobots
        //console.log('searchData',searchField,results);
        }
        dispatch({type:SEARCH_SWAPI_SUCCESS,payload:results});
    } catch (error){
        dispatch({type:SEARCH_SWAPI_FAILED,payload:error});
    }

}
