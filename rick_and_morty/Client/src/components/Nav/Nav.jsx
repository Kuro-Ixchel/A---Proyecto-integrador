import React from "react";
import {Link} from "react-router-dom"
import SearchBar from "../SearchBar/SearchBar";
import style from "./Nav.module.css"

class Nav extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return <div className={style.Nav}>
             <SearchBar onSearch={this.props.onSearch}/>
             <Link to = "/home" className={style.linkTo}>
                Home</Link>
                
             <Link to = "/about" className={style.linkTo}>
                About</Link>
             </div>
    }
}

export default Nav; 