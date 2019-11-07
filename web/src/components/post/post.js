import React from "react";

import "./post.css";

function Post( props ) {
    const { id, avatar, fullname, username, time, message, onDelete } = props;
    console.log(id);
    return(
        <div className="post container" >
            <div className="row">
                <div className="column">
                    <img width="50px"
                         height="50px"
                         className="rounded-circle"
                         src={avatar}
                         alt="avatar"
                    />
                </div>
                <div className="column">
                    <input type="hidden" value={id} />
                    <strong className="font-weight-bold">{ fullname }</strong>
                    <span className="font-italic">{ username }</span>
                    <span>{ time }</span>
                    <div>{ message }</div>
                    <a href="/#" onClick={ onDelete }>Delete</a>
                </div>
            </div>
        </div>
    );
}

export default Post;