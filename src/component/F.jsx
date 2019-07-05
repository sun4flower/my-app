import React ,{Component}from "react"
import ThemeContent from "./theme-content"
const ThemeBar=()=>{
    return <ThemeContent.Consumer>
        {
            theme=>{
                return <div style={ {backgroundColor:theme.background} }>444</div>
            }
        }
    </ThemeContent.Consumer>
}
export default ThemeBar;