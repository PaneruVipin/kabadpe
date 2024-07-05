import React, { useState } from "react";

const BlogTags = () => {
  const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleInputKeyDown = (event) => {
    if (event.key === "Enter") {
      const newTag = inputValue.trim();
      if (!newTag && !tags.includes(newTag)) {
        console.log(event.key, newTag);
        setTags([...tags, newTag]);
        setInputValue("");
      }
      // event.preventDefault();
    } else if (
      event.key === "Backspace" &&
      inputValue === "" &&
      tags.length > 0
    ) {
      setTags(tags.pop());
    }
  };

  const handleTagRemove = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };
  return (
    <>
      <div className="blog-inpt-bx blog-tags-bx">
        <span>Blog Tags</span>
        <div className="tag-inpt-flex">
          <div className="tags-flex-bx">
            {tags.map((tag, index) => (
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
            <input
              type="text"
              name="blogtags"
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={handleInputKeyDown}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogTags;
