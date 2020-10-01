import {
    RANDOM_SWAPI_PENDING,
    RANDOM_SWAPI_SUCCESS,
    RANDOM_SWAPI_FAILED,
    SEARCH_SWAPI_PENDING,
    SEARCH_SWAPI_SUCCESS,
    SEARCH_SWAPI_FAILED
} from './constants';

const initialRobotState = {
    allRobots:[],
    errorMessage:'',
    isPending:true
};

export const requestSwapiReducer = (state=initialRobotState,action={}) => {
    //console.log('reducer action',action);
    switch(action.type){
        case RANDOM_SWAPI_PENDING:
            return Object.assign({},state,{isPending:true})
        case RANDOM_SWAPI_SUCCESS:
            return Object.assign({},state,{isPending:false,allRobots:action.payload})
        case RANDOM_SWAPI_FAILED:
            return Object.assign({},state,{errorMessage:action.payload,allRobots:[]})
        case SEARCH_SWAPI_PENDING:
            return Object.assign({},state,{isPending:true})
        case SEARCH_SWAPI_SUCCESS:
            return Object.assign({},state,{isPending:false,allRobots:action.payload})
        case SEARCH_SWAPI_FAILED:
            return Object.assign({},state,{errorMessage:action.payload,allRobots:[]})        
        default:
            return state
    }
}
