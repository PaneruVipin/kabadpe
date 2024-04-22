import React, { useState } from "react";

const Addpostpopup = ({onClickClosePost}) => {
  const [selectedOption, setSelectedOption] = useState("A");
  const [images, setImages] = useState([]);

  const handleImageUpload = (event) => {
    const fileList = event.target.files;
    const newImages = [...images];

    for (let i = 0; i < fileList.length; i++) {
      const file = fileList[i];
      const reader = new FileReader();

      reader.onloadend = () => {
        newImages.push(reader.result);
        setImages(newImages.slice());
      };

      if (file) {
        reader.readAsDataURL(file);
      }
    }
  };

  const handleDeleteImage = (index) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages.slice());
  };

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <>
      <section className="add-post-comp" onClick={onClickClosePost}>
        <div className="add-post-bx" onClick={(e) => e.stopPropagation()}>
          <h3>Create Post</h3>

          <div className="add-post-user-info-bx">
            <div className="add-post-user-img">
              <img src="/images/customImg/team-3.jpg" alt="" />
            </div>
            <div className="add-post-user-det">
              <span>Faiz Alam</span>

              <div className="add-post-select-bx">
                {selectedOption === "A" ? (
                  <img src="/images/chats/globe.png" alt="" />
                ) : (
                  <img src="/images/chats/friends.png" alt="" />
                )}

                <select
                  name="share"
                  value={selectedOption}
                  onChange={handleOptionChange}
                  id="share"
                >
                  <option value="A">Public</option>
                  <option value="B">Friends</option>
                </select>
              </div>
            </div>
          </div>

          <div className="add-post-text-bx">
            <textarea
              name="postmessage"
              id="postmessage"
              cols="30"
              rows="5"
              placeholder="Whats on your mind, Faiz ?"
            ></textarea>
          </div>

          <div className="add-post-img-bx-2">
            <label htmlFor="input_file">
                <span>Add Post</span>

                <div className="add-post-imge">
                <i class="fa-regular fa-image"></i>
                </div>
                
            </label>
          <input type="file" id="input_file" style={{display : "none"}} accept="image/*" multiple onChange={handleImageUpload} />

        <div className="post-img-grid-bx">

        {images.map((image, index) => (
          <div key={index} className="post_img" >
            <img src={image} alt={`Image ${index}`}  />
            <button
              onClick={() => handleDeleteImage(index)}
             
            >
              <ion-icon name="close-outline"></ion-icon>
            </button>
          </div>
        ))}
            
        </div>

        
          </div>

          <div className="post-categ-grid">

          <div className="categ-cc">
            <select name="category" id="category">
              <option value="category">Choose Category</option>
              <option value="category">Events </option>
              <option value="category">News</option>
              <option value="category">Fundraise</option>
              <option value="category">Sustainability hacks</option>
              <option value="category">Innovations & Eco-finds</option>
              <option value="category">Sustainable Living</option>
              <option value="category">Sustainable Fasion & cosmetics</option>
              <option value="category">Eco-Tourism</option>
              <option value="category">Culture, art & food</option>
              <option value="category">ClimStripe Shift corne</option>
            </select>
          </div>

          <button className="send-post-btn">
            Send Post
        </button>
            
          </div>

        


        <div onClick={onClickClosePost} className="close-post-btn">
        <ion-icon name="close-outline"></ion-icon>
        </div>
          
        </div>
      </section>
    </>
  );
};

export default Addpostpopup;
