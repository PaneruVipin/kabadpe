import React, { useState } from 'react'

const Keyphrase = () => {
    const [tags, setTags] = useState([]);
    const [inputValue, setInputValue] = useState('');
  
    const handleInputChange = (event) => {
      setInputValue(event.target.value);
    };
  
    const handleInputKeyDown = (event) => {
      if (event.key === 'Enter') {
        const newTag = inputValue.trim();
  
        if (newTag !== '' && !tags.includes(newTag)) {
          setTags([...tags, newTag]);
          setInputValue('');
        }
      } else if (event.key === 'Backspace' && inputValue === '' && tags.length > 0) {
        // Remove the last tag if backspace is pressed and the input is empty
        setTags(tags.slice(0, -1));
      }

    };
  
    const handleTagRemove = (tagToRemove) => {
      setTags(tags.filter(tag => tag !== tagToRemove));
    };
  return (
    <>
         
                <div className="blog-inpt-bx blog-tags-bx">
                  <span>Keyphrase</span>
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
  )
}

export default Keyphrase
