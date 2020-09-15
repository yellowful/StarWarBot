import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
//import { robots } from './robots';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry'
import './App.css';

//最頂端的流程
class App extends Component {

//設定初始值
constructor(){
    super();
    this.state = {
        allRobots: []
    }
}

//App載入後，第一個執行的流程
componentDidMount(){
    let randomArray = [];
    //star war人物共88位，從中產生10個亂數
    for(let i=0;i<10;i++){
        let randomNumber = Math.floor(Math.random()*88);
        if (!randomArray.includes(randomNumber)){
            randomArray.push(randomNumber);
        }
    }
    //抓出10個亂數的Star War的人物
    const getData = async (randomArray) => {
        let randomRobots = [];    
        for await (let randomNumber of randomArray){
                let promiseFetch = await fetch(`https://swapi.dev/api/people/${randomNumber}/`);
                let temp = await promiseFetch.json();
                temp.id = randomNumber.toString()
                //把抓回來的人物資料加上id
                randomRobots.push(await temp);
        }
        this.setState({allRobots:randomRobots.concat()});
        //allRobots在這一行被更新，
        //用.concat()才不會之後不小心動到randomRobots的時候，
        //因為pass by reference而去動到this.state
    }
    //執行，執行完this.state.allRobots會設定10隻亂數角色
    getData(randomArray);

}

//鍵盤打字時要執行的，這是自行定義的名稱
onSearchChange = (event) => {
    //鍵盤發生敲擊時，回傳的event會傳入，然後更新allRobots
    this.searchData(event.target.value);
}   

//必須要用arrow function這個ES6的語法
//否則this不會被正確bind住，會是undefined
searchData = async (searchField)=>{
    const promiseFetch = await fetch(`https://swapi.dev/api/people/?search=${searchField}`);
    let temp = await promiseFetch.json();
    //抓回來的一群資料放到results裡
    const {results} = await temp;
    //把資料加上id
    for await (let result of results){
        result.id = await result.url.split('/')[5];
    }
    //這行必須放在async裡面，才會被正確的執行
    //因為results是個promise，所以this.setState如果放在async外面，接受searchData所return的result
    //將會更新為一個promise，不會再管result是不是會再更新了
    //放這裏的話，this.setState就會等results更新時，才更新allRobots
    //console.log('searchData',searchField,results);
    this.setState({allRobots:results});
}

render(){
    console.log('render',this.state);
    //當this.setState更新的時候，會重新render，allRobots就會被更新
    const { allRobots } = this.state;
            return(
                <div className='tc'>
                    <h1 className='f2'>RobotsFriends</h1>
                    {/* 
                    React就是靠searchChange這個props把
                    event從onSearchChange這個callback 
                    function傳回來。
                    這裡所有的this都是指App的instance
                    (class App產生的object)。
                    */}
                    <SearchBox searchChange = {this.onSearchChange}/>
                    {/* 利用定義這個component，讓children有捲軸的功能 */}
                    <Scroll>
                        {/* 利用這個component有定義componentDidCatch()，來顯示children的錯誤訊息 */}
                        <ErrorBoundry>
                            {/* 利用robots這個props把更新後的allRobots資料傳下去 */}
                            <CardList robots={ allRobots } />
                        </ErrorBoundry>
                    </Scroll>                
                </div>)
}



}
export default App;


