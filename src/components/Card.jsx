import React from "react"
import Avatar from "./Avatar";
import Details from "./Detail";
function Card(props){

    return <div className="card">
            <div className="top">
            <h2 className="name">{props.name}</h2>
            <Avatar imgURL = {props.imgURL}/>
            </div>
            <div className="bottom">
            <Details detailinfo={props.phone} />
            <Details detailinfo={props.email} />
            </div>
            </div>
}
export default Card;