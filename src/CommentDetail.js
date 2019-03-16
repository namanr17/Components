import React from "react";
import Faker from "faker";

const CommentDetail = function(props) {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={Faker.image.avatar()} />
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.author}
        </a>
        <div className="metadata">
          <span className="date" style={{ color: "blue" }}>
            {props.time} on {props.date}
          </span>
        </div>
        <div className="text">{props.details}</div>
      </div>
    </div>
  );
};

export default CommentDetail;