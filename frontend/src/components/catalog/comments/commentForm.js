import React, { useState } from "react";

function CommentForm({
  submitLabel,
  handleSubmit,
  initialText = "",
  hasCancelButton = false,
  handleCancel,
}) {
  const [text, setText] = useState(initialText);
  const isTextAreaDisable = text.length === 0;

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(text);
    setText("");
    console.log("The comment was submited successfuly");
  };

  return (
    <div>
      <form className="m-5 flex flex-row justify-center" onSubmit={onSubmit}>
        <textarea
          className="border border-[#4477CE] text-[#512B81] h-35 p-2 outline-0 rounded-l-lg"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write your comment here"
        />
        <button
          className={`bg-[#4477CE] text-white h-35 font-bold p-2 ${hasCancelButton ? "" : 'rounded-r-lg'}`}
          disabled={isTextAreaDisable}
        >
          {submitLabel}
        </button>
        {hasCancelButton && <button
          className="bg-[#512B81] text-white h-35 font-bold p-2 rounded-r-lg" onClick={handleCancel}
        >
          Cancel
        </button>}
      </form>
    </div>
  );
}

export default CommentForm;
