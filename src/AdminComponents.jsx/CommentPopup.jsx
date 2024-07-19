const CommentPopup = ({
  data,
  onClickShut,
  onClickClose,
  type = "comment",
}) => {
  return (
    <div className="blog-comnet-popup" onClick={onClickShut}>
      <div className="blog-comnt-popup-bx" onClick={onClickClose}>
        <h6>{type == "comment" ? "Post Comments" : "Reports"}</h6>

        <div className="close-b" onClick={onClickShut}>
          <i class="fa-regular fa-circle-xmark"></i>
        </div>

        <div className="blog-comnt-list">
          {data?.[type == "comment" ? "BlogComments" : "BlogReports"]?.map(
            ({ id, comment, User }) => {
              return (
                <li key={id}>
                  <div className="blog-comnt-user-bx">
                    <div className="b-comnt-u-img">
                      <img
                        src={
                          User?.profileImage ||
                          "/images/temp/temp-user-profile.png"
                        }
                        alt=""
                      />
                    </div>
                    <div className="b-comnt-u-info">
                      <h6> {User?.fullname} </h6>
                      <p>{comment}</p>

                      {/* <div className="post-btn-flex">
                      <button className="post-btns">Approve</button>
                      <button className="post-btns">Disapprove</button>
                      <button className="post-btns">Delete</button>
                    </div> */}
                    </div>
                  </div>
                </li>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};
export default CommentPopup;
