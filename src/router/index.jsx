import React from "react"
import {
    HashRouter as Router,
    Route,
    Switch
} from "react-router-dom"
import A from "../component/A"
import Rank from "../component/rank"
import App from '../App';
import My from "../component/my"
let router=()=>{
    return (<Router>

    <App>
        <A/>
        <Rank/>
        <My/>
    </App>
    </Router>)
}
export default router; 