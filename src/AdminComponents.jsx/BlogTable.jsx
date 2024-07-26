import React, { useState } from "react";
import { FaRegCommentDots } from "react-icons/fa6";
import ComntData from "./PostComntData";
import { DateTime } from "luxon";
import CommentPopup from "./CommentPopup";
import { blogPostEdit } from "../apis/blogs/blog";
const BlogTable = ({
  data,
  onClickClose,
  postComnet,
  onClickShut,
  onClickOpen,
  selectedData,
  setSelectedData,
  setIsedit,
  refetch,
}) => {
  const [popupType, setPopupType] = useState("comment");
  return (
    <>
      <div className="all-prod-table-comp blog-table">
        <table>
          <thead>
            <tr>
              <th>
                <div className="b-check">
                  <input
                    className="form-check-input"
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
              <th>Reports</th>
              <th>Dates</th>
            </tr>
          </thead>
          <tbody>
            {data?.map(({ id, categoryName, title, updatedOn, ...rest }) => (
              <tr key={id}>
                <td>
                  <div className="b-check">
                    <input
                      className="form-check-input"
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
                      <span
                        onClick={async () => {
                          await blogPostEdit({ id, blogStatus: "trash" });
                          refetch();
                        }}
                      >
                        Trash
                      </span>
                      <span>Preview</span>
                    </div>
                  </td>
                </td>
                <td>
                  <span>{categoryName}</span>
                </td>

                <td>
                  <span
                    onClick={() => {
                      setSelectedData({
                        id,
                        categoryName,
                        title,
                        updatedOn,
                        ...rest,
                      });
                      onClickOpen();
                      setPopupType("comment");
                    }}
                    className="comnt-btn"
                  >
                    {rest?.BlogComments?.length}
                  </span>
                </td>
                <td>
                  <span
                    onClick={() => {
                      setSelectedData({
                        id,
                        categoryName,
                        title,
                        updatedOn,
                        ...rest,
                      });
                      onClickOpen();
                      setPopupType("report");
                    }}
                    className="comnt-btn"
                  >
                    {rest?.BlogReports?.length}
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
        <CommentPopup
          type={popupType}
          data={selectedData}
          onClickClose={onClickClose}
          onClickShut={onClickShut}
        />
      ) : null}
    </>
  );
};

export default BlogTable;
