import { GETDATA } from "./actions_type"
import initstate from "./state"

let reducer=(state=initstate,actions)=>{
    let { text ,type  } =actions;
    switch (type){
        case GETDATA :{
            return Object.assign({} , state , {data:[1,2,3,4]})
        }
        default:
            return state;
    }
}
export default reducer;