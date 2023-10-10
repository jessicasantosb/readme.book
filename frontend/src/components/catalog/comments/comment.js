import React from "react";
import { FaReply, FaEdit, FaTrash } from "react-icons/fa";

function Comment({ comment, replies }) {
  return (
    <section>
      <div className="flex flex-row justify-between py-5">
        <h3 className="text-[#512B81]">{comment.username}</h3>
        <p>{comment.createdAt}</p>
      </div>
      <p>{comment.body}</p>
      <div className="flex flex-row py-2 px-5 gap-3">
        <FaReply color="purple" className="cursor-pointer" />
        <FaEdit color="green" className="cursor-pointer" />
        <FaTrash color="red" className="cursor-pointer" />
      </div>
      {replies.length > 0 && (
        <div className="ml-9">
          {replies.map((reply) => (
            <Comment comment={reply} key={reply.id} replies={[]} />
          ))}
        </div>
      )}
    </section>
  );
}

export default Comment;
