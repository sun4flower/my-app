import React ,{Component}from "react"
import F from "./F"
class E extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return [
            <div key="1">first element</div>,
            <div key="2">second element</div>,
            <F key="3"></F>
          ];
    }
}
export default E;