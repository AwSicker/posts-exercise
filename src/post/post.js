import React from 'react';
import "../posts-screen/posts-screen.css"
import {Link} from "react-router-dom";

export const Post = ({title, content, userId}) => {
    return(

    <div className="card" style={{width: '18rem'}}>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{content}</p>
            <Link to={`/${userId}`} className="card-link">link to author page</Link>
        </div>
    </div>
    )
}
