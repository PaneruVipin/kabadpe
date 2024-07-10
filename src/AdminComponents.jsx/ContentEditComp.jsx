import React, { useRef, useState } from "react";
import JoditEditor from "jodit-react";
import { NavLink } from "react-router-dom";

const ContentEditComp = () => {
  const editor = useRef(null);
  const [content, setContent] = useState(
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, obcaecati aliquam magnam officiis distinctio molestiae voluptas quam deleniti ipsum? Corrupti ullam nihil doloribus accusamus quae consequuntur libero illo reprehenderit dolore. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, obcaecati aliquam magnam officiis distinctio molestiae voluptas quam deleniti ipsum? Corrupti ullam nihil doloribus accusamus quae consequuntur libero illo reprehenderit dolore."
  );
  return (
    <>
      <section className=" content-edit-comp">
        <div className="add-title-bx">
          <span>Title </span>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Add Title"
            autoComplete="off"
            required
          />
        </div>

        <div className="content-text add-title-bx">
          <span>Content</span>
          <JoditEditor
            ref={editor}
            value={content}
            onChange={(newContent) => {
              setContent(newContent);
            }}
          />
        </div>

        <div className="content-btn-flex">
          <button className="content-btn">Save</button>
        </div>
      </section>
    </>
  );
};

export default ContentEditComp;
