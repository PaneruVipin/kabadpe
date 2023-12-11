import React, { useState } from "react";
import DatePicker from "react-datepicker";

const CouponPopup = () => {
  const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [suggestedTags] = useState([
    "JavaScript",
    "React",
    "HTML",
    "CSS",
    "Bootstrap",
    "Next",
    "Java",
    "Python",
    "Mongoose",
    "Gsap",
    "JQuery",
  ]); // Example suggested tags
  const [selectedOption, setSelectedOption] = useState("option1");
  const [startDate, setStartDate] = useState(new Date("2014/02/08"));
  const [endDate, setEndDate] = useState(new Date("2014/02/10"));

  const handleSelectedChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    setSearchValue(event.target.value);
  };

  const handleInputKeyPress = (event) => {
    if (event.key === "Enter" && inputValue.trim() !== "") {
      setTags([...tags, inputValue.trim()]);
      setInputValue("");
    setSearchValue('');

    }
  };

  const filterSearchItems = suggestedTags.filter((item) =>
    item.toLowerCase().includes(searchValue.toLowerCase())
  );

  const handleTagRemove = (tagToRemove) => {
    const updatedTags = tags.filter((tag) => tag !== tagToRemove);
    setTags(updatedTags);
  };


  const handleSuggestionClick = (suggestedTag) => {
    setTags([...tags, suggestedTag]);
    setInputValue('');
    setSearchValue('');

  };

  return (
    <>
      <section className="coupon-pop-up-comp">
        <div className="coupon-popup-bx">
          <h6>Create Coupon</h6>

          <div className="coupon-grid-bx">
            <div className="coupon-code-inpt-field-bx">
              <label htmlFor="couponcode">Coupon Code</label>
              <input
                type="couponcode"
                name="couponcode"
                id="couponcode"
                autoComplete="off"
              />
            </div>

            <div className="coupon-code-inpt-field-bx">
              <label htmlFor="couponcode">Coupon Title</label>
              <input
                type="coupontitle"
                name="coupontitle"
                id="coupontitle"
                autoComplete="off"
              />
            </div>
          </div>

          <div className="coupon-grid-bx my-3">


          <div className="coupon-code-inpt-field-bx ">
            <label htmlFor="Description">Description</label>
            <textarea
              name="description"
              id="description"
              cols="30"
              placeholder="Type message here..."
            ></textarea>
          </div>

          <div className="three-fields-bx">

            <div className="date-grid-bx mb-3">

                    <div className="coupon-date-bx">
                        <label htmlFor="">Start Date</label>
                        <div className="date-field">
                        <input type="date" />
                      </div>
                    </div>


                    <div className="coupon-date-bx ">
                    <label htmlFor="">End Date</label>
                    <div className="date-field">
                    <input type="date" />

                      </div>
                    </div>

                    </div>

          <div className="coupon-code-inpt-field-bx dis-type-sel-bx">
            <label htmlFor="Discounttype">Discount Type</label>
            <select
              name="Discounttype"
              id="Discounttype"
              value={selectedOption}
              onChange={handleSelectedChange}
            >
              <option value="option1">percentage discount</option>
              <option value="option2">fixed basket discount</option>
              <option value="option3">fixed product discount</option>
              <option value="option4">fixed product category discount</option>
              <option value="option5">fixed company discount</option>
            </select>
          </div>



          </div>


          </div>

          {selectedOption === "option1" && (
            <div className="selcted-option-bx">

                <p>Add Category</p>
                
              <div className="add-tag-input-field-main-bx">
                <div className="multiple-tags-flex-bx">
                <div className="tags-flex-bx">
                  {tags.map((tag, index) => (
                    <div key={index} className="tag-bx">
                      {tag}
                      <button onClick={() => handleTagRemove(tag)}>x</button>
                    </div>
                  ))}
                </div>
                </div>

                <div className="inpt-tag-field-main">

                <div className="type-tag-inpt-bx">
                <input
                  type="text"
                  placeholder="Type a tag"
                  value={inputValue}
                  onChange={handleInputChange}
                  onKeyPress={handleInputKeyPress}
                />
                </div>

                <div className="suggestions">
                  {searchValue !== "" &&
                    filterSearchItems.map((item, index) => (
                      <div className="search-key-pointer" key={index} onClick={() => handleSuggestionClick(filterSearchItems)}>{item}</div>
                    ))}
                </div>
                </div>

              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default CouponPopup;
