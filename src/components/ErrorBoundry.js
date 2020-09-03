import React, { Component } from 'react';

class ErrorBoundry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError:false
        }
        //和爸爸無關，所以設在這裡
    }
    
    //利用這個偵測子component是否出錯，有出錯就更新state。
    componentDidCatch(error,info){
        this.setState({hasError:true})
    }
    
    render(){
        //如果小孩出錯，就顯示錯誤訊息。
        if (this.state.hasError === true) {
            return <h2> Oooooops! There is something wrong!</h2>
        } else { return this.props.children }
        //沒出錯，小孩正常render
    }
}

export default ErrorBoundry;