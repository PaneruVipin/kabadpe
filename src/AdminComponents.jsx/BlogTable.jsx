import React from "react";
import { FaRegCommentDots } from "react-icons/fa6";
import ComntData from "./PostComntData";
import { DateTime } from "luxon";
const BlogTable = ({
  data,
  onClickClose,
  postComnet,
  onClickShut,
  onClickOpen,
  setSelectedData,
  setIsedit,
}) => {
  return (
    <>
      <div className="all-prod-table-comp blog-table">
        <table>
          <thead>
            <tr>
              <th>
                <div class="b-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                </div>
              </th>
              <th>Title</th>
              <th> Categories</th>
              <th>
                {" "}
                <FaRegCommentDots className="comnt-icon" />{" "}
              </th>
              <th>Dates</th>
            </tr>
          </thead>
          <tbody>
            {data?.map(({ id, categoryName, title, updatedOn, ...rest }) => (
              <tr key={id}>
                <td>
                  <div class="b-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                  </div>
                </td>

                <td>
                  <td>
                    <span>{title}</span>
                    <div className="prod-edit-bin-vw-flx-box">
                      <span
                        onClick={() => {
                          setSelectedData({
                            id,
                            categoryName,
                            title,
                            updatedOn,
                            ...rest,
                          });
                          setIsedit(true);
                        }}
                      >
                        Edit
                      </span>
                      <span>Trash</span>
                      <span>Preview</span>
                    </div>
                  </td>
                </td>
                <td>
                  <span>{categoryName}</span>
                </td>

                <td>
                  <span onClick={onClickOpen} className="comnt-btn">
                    15{" "}
                  </span>
                </td>
                <td>
                  <td>
                    <span className="b-text">Last Modified</span>
                    <span>
                      {DateTime.fromISO(updatedOn, {
                        zone: "utc",
                      }).toFormat("ccc dd LLL yyyy")}{" "}
                      at{" "}
                      {DateTime.fromISO(updatedOn, {
                        zone: "utc",
                      }).toFormat("hh:mm a")}
                    </span>
                  </td>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {postComnet ? (
        <div className="blog-comnet-popup" onClick={onClickShut}>
          <div className="blog-comnt-popup-bx" onClick={onClickClose}>
            <h6>Post Comments</h6>

            <div className="close-b" onClick={onClickShut}>
              <i class="fa-regular fa-circle-xmark"></i>
            </div>

            <div className="blog-comnt-list">
              {ComntData.map((curElem, id) => {
                return (
                  <>
                    <li key={curElem.id}>
                      <div className="blog-comnt-user-bx">
                        <div className="b-comnt-u-img">
                          <img src={curElem.img} alt="" />
                        </div>
                        <div className="b-comnt-u-info">
                          <h6> {curElem.name} </h6>
                          <span> {curElem.email} </span>
                          <p>{curElem.mesge}</p>

                          <div className="post-btn-flex">
                            <button className="post-btns">Approve</button>
                            <button className="post-btns">Disapprove</button>
                            <button className="post-btns">Delete</button>
                          </div>
                        </div>
                      </div>
                    </li>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default BlogTable;
