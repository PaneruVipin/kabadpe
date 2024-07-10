import React, { useState } from "react";

const BlogTags = ({ label, state, ...rest }) => {
  const [tags, setTags] = state;

  const handleInputKeyDown = (event) => {
    const inputValue = event.target.value;
    if (event.key === "Enter") {
      event.preventDefault();
      const newTag = inputValue.trim();
      if (newTag) {
        let newTags = newTag?.split(",");
        newTags = newTags?.filter((t) => !tags?.includes(t));
        setTags([...tags, ...newTags]);
        event.target.value = "";
      }
    } else if (
      event.key === "Backspace" &&
      !event.target.value &&
      tags.length
    ) {
      setTags((prev) => prev?.filter((e, i) => prev?.length - 1 != i));
    }
  };

  const handleTagRemove = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };
  return (
    <>
      <div className="blog-inpt-bx blog-tags-bx">
        <span>{label}</span>
        <div className="tag-inpt-flex">
          <div className="tags-flex-bx">
            {tags?.map((tag, index) => (
              <div key={index} className="b-tag">
                {tag}
                <button onClick={() => handleTagRemove(tag)}>
                  {" "}
                  <ion-icon name="close"></ion-icon>{" "}
                </button>
              </div>
            ))}
          </div>
          <div className="blog-inpt">
            <input type="text" onKeyDown={handleInputKeyDown} {...rest} />
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogTags;
