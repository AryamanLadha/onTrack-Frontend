const initState = {
    major: 'History'
}



const reducer = (state = initState,action) => {
    if(action.type === 'CHANGE_MAJOR'){
        const newMajor = action.payload.newMajor
        return ({
            ...state,
            major: newMajor
        });
    }
    return state
}


export default reducer;