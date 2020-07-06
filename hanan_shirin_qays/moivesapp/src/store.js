import {createStore,combineReducers} from 'redux';







const movies = (state=[],action)=>{

    if(action.type === "movies")
    return action.payload;
    
    return state;

}


const isLoading = (state=true,action)=>{
    if(action.type === "isLoading")

    return action.payload;
    return state;

}



const allReducers = combineReducers({
    movies,isLoading
});


const store = createStore(allReducers);


export default store;