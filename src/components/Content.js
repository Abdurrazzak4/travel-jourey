import React from "react";
import icon from "../images/Fill 219.png";


export default function Content(props) {
    return (
        <div className="content">
            <img className="content-img" src={props.imageUrl} alt="" />
            <div className="content-text">
                <div className="content-location"><img src={icon} alt="" />{props.location}<a href={props.googleMapsUrl} target="blank">View on Google Maps</a></div>
                <div className="content-title">{props.title}</div>
                <div className="content-date">{props.startDate} - {props.endDate}</div>
                <div className="content-description">
                {props.description}
                </div>
                </div>
                
        </div>

            
        )
}