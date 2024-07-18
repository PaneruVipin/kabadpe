import { useState } from "react";
import { reportBlogPost } from "../apis/blogs/report";
import { toast } from "react-toastify";
const ReportPopup = ({ data, onClickClosePost }) => {
  const [comment, setComment] = useState("");
  const handleSubmitRepot = async () => {
    if (!comment) return;
    const res = await reportBlogPost({ id: data?.id, comment });
    if (res?.error) {
      toast.error(res?.message);
      return;
    }
    toast.success(res);
    onClickClosePost();
  };
  return (
    <section className="add-post-comp" onClick={onClickClosePost}>
      <div className="add-post-bx" onClick={(e) => e.stopPropagation()}>
        <div className="comment-main">
          <h5>Report</h5>
          <div className="comnt-messge comnt-inpt">
            <textarea
              onChange={(e) => setComment(e.target.value)}
              value={comment}
              name="message"
              id="message"
              cols="30"
              rows="5"
              placeholder="Enter your report here..."
            ></textarea>
          </div>
          <button
            onClick={handleSubmitRepot}
            className="tag-btn comnt-btn-m mt-4"
          >
            Submit
          </button>
        </div>
      </div>
    </section>
  );
};
export default ReportPopup;
