import React, { useState } from "react";
import { FaThumbsUp, FaReply, FaEdit, FaTrash } from "react-icons/fa";
import CommentForm from "./commentForm";

function Comment({
  comment,
  replies,
  currentUserId,
  addComment,
  deleteComment,
  updateComment,
  parentId = null,
  activeComment,
  setActiveComment,
}) {
  const [like, setLike] = useState(2),
    [isLike, setIsLike] = useState(false),
    onLikeBtnClick = () => {
      setLike(like + (isLike ? -1 : 1));
      setIsLike(!isLike);
    };

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
      <div className="flex flex-row justify-between pt-5 ">
        <h3 className="text-[#512B81] text-lg italic">{comment.username}</h3>
        <p>{createdAt}</p>
      </div>

      {!isEditing && <p>{comment.body}</p>}
      {isEditing && (
        <CommentForm
          submitLabel="Update"
          initialText={comment.body}
          hasCancelButton
          handleSubmit={(text) => updateComment(text, comment.id)}
          handleCancel={() => setActiveComment(null)}
        />
      )}

      <div className="flex flex-row items-center py-2 px-5 gap-3">
        <p className="flex gap-2 items-center pr-5 text-[#6495ED]">
          <FaThumbsUp
            className={isLike ? "" : "opacity-40"}
            onClick={onLikeBtnClick}
          />
          {like}
        </p>

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

      <div className="flex justify-start -ml-5">
        {isReplying && (
          <CommentForm
            submitLabel="Reply"
            handleSubmit={(text) => addComment(text, replyId)}
          />
        )}
      </div>
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
              updateComment={updateComment}
              parentId={comment.id}
              activeComment={activeComment}
              setActiveComment={setActiveComment}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default Comment;
