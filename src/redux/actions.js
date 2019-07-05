import { GETDATA } from "./actions_type"
export let actions={
    [GETDATA](text){
        return {
            type:GETDATA,
            text:text

        }
    }
}