export const initState = {
    count: 100
}

export const Reducer=(state=initState, action) => {
    switch(action.type){
        case "DECRE":
            return{
                count: state.count-1
            }
            break;
        case "INCRE":
            return{
                count: state.count+1
            }
            break;
        default:
            return state;
    }
}