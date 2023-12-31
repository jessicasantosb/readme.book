import { useState, useEffect } from "react";
import {
  getComments as getCommentApi,
  createComment as createCommentApi,
  deleteComment as deleteCommentApi,
  updateComment as updateCommentApi,
} from "../../api/commentApi";
import Comment from "./comment";
import CommentForm from "./commentForm";
import { GiConversation } from "react-icons/gi";
import Cookies from "universal-cookie";

function Comments({ currentUserId }) {
  const [serverComments, setServerComments] = useState([]);
  const [activeComment, setActiveComment] = useState(null);
  const rootComments = serverComments.filter(
    (serverComment) => serverComment.parentId === null
  );

  const cookies = new Cookies();
  const token = cookies.get("token");

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
      setActiveComment(null);
    });
  };

  const deleteComment = (commentId) => {
    if (window.confirm("Will you remove this comment?")) {
      deleteCommentApi(commentId).then(() => {
        const updatedServerComments = serverComments.filter(
          (serverComment) => serverComment.id !== commentId
        );
        setServerComments(updatedServerComments);
      });
    }
  };

  const updateComment = (text, commentId) => {
    updateCommentApi(text, commentId).then(() => {
      const updatedServerComments = serverComments.map((serverComment) => {
        if (serverComment.id === commentId) {
          return { ...serverComment, body: text };
        }
        return serverComment;
      });
      setServerComments(updatedServerComments);
      setActiveComment(null);
    });
  };

  useEffect(() => {
    getCommentApi().then((data) => {
      setServerComments(data);
    });
  }, []);

  return (
    <section className="mx-9">
      <GiConversation className="absolute w-full h-full -right-72 m-0 opacity-20 text-[#4477CE] -z-10" />
      <h1 className="flex flex-row justify-center gap-5 font-bold text-5xl text-[#4477CE] pt-32 pb-9 text-center">
        Comment Section
      </h1>
      {token ? (
        <div>
          <CommentForm submitLabel="Send" handleSubmit={addComment} />
          <div>
            {rootComments.map((rootComment) => (
              <div className="mx-5 my-9">
                <Comment
                  key={rootComment.id}
                  comment={rootComment}
                  replies={getReplies(rootComment.id)}
                  currentUserId={currentUserId}
                  addComment={addComment}
                  deleteComment={deleteComment}
                  updateComment={updateComment}
                  activeComment={activeComment}
                  setActiveComment={setActiveComment}
                />
              </div>
            ))}
          </div>{" "}
        </div>
      ) : (
        <div>
          <p className="text-center">You can leave your opinions about the book here!</p>
          <h4 className="text-center my-32 text-[#512B81] text-lg italic">Please log in to see and leave comments about the book.</h4>
        </div>
      )}
    </section>
  );
}

export default Comments;
