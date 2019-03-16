import React from "react";
import ReactDOM from "react-dom";
import Faker from "faker";
import ApprovalCard from "./ApprovalCard";
import CommentDetail from "./CommentDetail";

const App = function() {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Bil"
          avatar={Faker.image.avatar()}
          time="Today at 3:00 PM"
          content="Nice blog!"
        />
      </ApprovalCard>
      <Message />
    </div>
  );
};

const Message = function(props) {
  return (
    <div className="ui message">
      <div className="header">Attention!</div>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
