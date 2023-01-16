import React from "react";
import Star from "../Images/Star 1.png"

export default function Card(props) {
    return(
        <div className="card">
            <img
            className="card-image1"
            src={props.img}
            />
            <div className="card-info">
                <img
                className="star"
                src={Star}
                />
                <span>{props.rating}</span>
                <span>{props.reviewCount}•</span>
                <span>{props.country}</span>
            </div>
            <div className="title-price">
                <p className="image-p">{props.title}</p>
                <p className="image-p">From ${props.price} / person</p> 
            </div>
        </div>

    )
}