import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
//import { robots } from './robots';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';
import {requestRandomSwapi,requestSearchSwapi} from '../actions';
import {connect} from 'react-redux';

const mapStatesToProps = (state) => ({
    allRobots:state.allRobots,
    isPending:state.isPending,
    errorMessage:state.errorMessage
})

const mapDispatchToProps = (dispatch)=>{
    return {
        onRequestRandomSwapi:(randomArray)=>dispatch(requestRandomSwapi(randomArray)),
        onSearchChange:(event)=>dispatch(requestSearchSwapi(event.target.value))
    }   
}


//最頂端的流程
class App extends Component {


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
        this.props.onRequestRandomSwapi(randomArray);
    }

    render(){
        //當this.setState更新的時候，會重新render，allRobots就會被更新
        const { allRobots,isPending,onSearchChange } = this.props;
        //console.log('render',this.props);
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
                        <SearchBox searchChange = {onSearchChange}/>
                        {/* 利用定義這個component，讓children有捲軸的功能 */}
                        <Scroll>
                            {/* 利用這個component有定義componentDidCatch()，來顯示children的錯誤訊息 */}
                            <ErrorBoundry>
                                {/* 利用robots這個props把更新後的allRobots資料傳下去 */}
                                <CardList allRobots={ allRobots } isPending={isPending}/>
                            </ErrorBoundry>
                        </Scroll>                
                    </div>)
    }
}

export default connect(mapStatesToProps,mapDispatchToProps)(App);


