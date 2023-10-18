import React from "react";
import { FaReply, FaEdit, FaTrash } from "react-icons/fa";
import CommentForm from "./commentForm";

function Comment({
  comment,
  replies,
  currentUserId,
  addComment,
  deleteComment,
  parentId = null,
  activeComment,
  setActiveComment,
}) {
  const fiveMinutes = 300000;
  const timePassed = new Date() - Date(comment.createdAt) > fiveMinutes;
  const canReply = Boolean(currentUserId);
  const canEdit = currentUserId === comment.userId && !timePassed;
  const canDelete = currentUserId === comment.userId && !timePassed;
  const createdAt = new Date(comment.createdAt).toLocaleDateString();
  const isReplying =
    activeComment &&
    activeComment.type === "replying" &&
    activeComment.id === comment.id;
  const isEditing =
    activeComment &&
    activeComment.type === "editing" &&
    activeComment.id === comment.id;
  const replyId = parentId ? parentId : comment.id;

  return (
    <section>
      <div className="flex flex-row justify-between py-5">
        <h3 className="text-[#512B81]">{comment.username}</h3>
        <p>{createdAt}</p>
      </div>
      <p>{comment.body}</p>
      <div className="flex flex-row py-2 px-5 gap-3">
        {canReply && (
          <FaReply
            color="purple"
            className="cursor-pointer"
            onClick={() =>
              setActiveComment({ id: comment.id, type: "replying" })
            }
          />
        )}

        {canEdit && (
          <FaEdit
            color="green"
            className="cursor-pointer"
            onClick={() =>
              setActiveComment({ id: comment.id, type: "editing" })
            }
          />
        )}

        {canDelete && (
          <FaTrash
            color="red"
            className="cursor-pointer"
            onClick={() => deleteComment(comment.id)}
          />
        )}
      </div>
      {isReplying && (
        <CommentForm
          submitLabel="Reply"
          handleSubmit={() => addComment(text, replyId)}
        />
      )}
      {replies.length > 0 && (
        <div className="ml-9">
          {replies.map((reply) => (
            <Comment
              comment={reply}
              key={reply.id}
              replies={[]}
              currentUserId={currentUserId}
              addComment={addComment}
              deleteComment={deleteComment}
              parentId={comment.id}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default Comment;
