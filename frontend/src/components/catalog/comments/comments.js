import { useState, useEffect } from "react";
import {
  getComments as getCommentApi,
  createComment as createCommentApi,
} from "../../api/commentApi";
import Comment from "./comment";
import CommentForm from "./commentForm";
import { GiConversation } from "react-icons/gi";

function Comments({ currentUserId }) {
  const [serverComments, setServerComments] = useState([]);
  const rootComments = serverComments.filter(
    (serverComment) => serverComment.parentId === null
  );

  const getReplies = (commendId) => {
    return serverComments
      .filter((serverComment) => serverComment.parentId === commendId)
      .sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );
  };

  const addComment = (text, parentId) => {
    console.log("add comment", text, parentId);
    createCommentApi(text, parentId).then((comment) => {
      setServerComments([comment, ...serverComments]);
    });
  };

  useEffect(() => {
    getCommentApi().then((data) => {
      setServerComments(data);
    });
  }, []);

  return (
    <section className="my-24 mx-96">
      <GiConversation className="absolute w-full h-full -right-96 m-0 opacity-20 text-[#4477CE] -z-10" />
      <h1 className="flex flex-row justify-center gap-5 font-bold text-5xl text-[#4477CE] pt-32 pb-9 text-center">
        Comments
      </h1>
      <CommentForm submitLabel="Send" handleSubmit={addComment} />
      <div>
        {rootComments.map((rootComment) => (
          <div className="m-5">
            <Comment
              key={rootComment.id}
              comment={rootComment}
              replies={getReplies(rootComment.id)}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Comments;
