import React from "react";
import ReactDOM from "react-dom";
import ApprovalCard from "./ApprovalCard";
import CommentDetail from "./CommentDetail";

const App = function() {
  return (
    <div className="ui container comments">
      <ApprovalCard />
      <CommentDetail
        author="Bil"
        date="3rd March"
        time="6:00 PM"
        details="Nice blog!"
      />
      <CommentDetail
        author="Mack"
        date="14th March"
        time="10:30 AM"
        details="Keep up the good work.."
      />
      <CommentDetail
        author="Joe"
        date="30th Jan"
        time="5:40 PM"
        details="Good job."
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
