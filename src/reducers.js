import {
    FETCH_SWAPI_PENDING,
    FETCH_SWAPI_SUCCESS,
    FETCH_SWAPI_FAILED
} from './constants';

const initialRobotState = {
    allRobots:[],
    errorMessage:'',
    isPending:true,
};

export const requestSwapiReducer = (state=initialRobotState,action={}) => {
    switch(action.type){
        case FETCH_SWAPI_PENDING:
            return Object.assign({},state,{isPending:true})
        case FETCH_SWAPI_SUCCESS:
            return Object.assign({},state,{isPending:false,allRobots:action.payload})
        case FETCH_SWAPI_FAILED:
            return Object.assign({},state,{errorMessage:action.payload,allRobots:[]})
        default:
            return state
    }
}