export const userDataReducer = (state, {type,payload}) => {
    switch(type){
        case "LOGIN":
            return payload;
    }
}