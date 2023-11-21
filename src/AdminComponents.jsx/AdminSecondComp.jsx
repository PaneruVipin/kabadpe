import React, { useState } from "react";

const AdminSecondComp = () => {
  const [editBx, setEditBx] = useState(false);

  return (
    <>
      <section className="admin-second-comp">
        <div className="admin-secd-grid-box">
          <div className="left-main-box">
            {/* <div className="prime-prog-main-box">
              <div className="prime-prog-box"></div>

              <div className="prim-prog-det">
                <h6>785</h6>
                <span>Available Room Today</span>
              </div>
            </div> */}

            <div className="left-ad-progress-bar-main mb-4" >
              <h6>Today's Appointments</h6>

              <div className="ad-prog-bar-box">
                <div className="inner-prog-bar"></div>
              </div>

              <div className="ad-prog-bar-box">
                <div className="inner-prog-bar inner-prog-bar2"></div>
              </div>

              <div className="ad-prog-bar-box">
                <div className="inner-prog-bar inner-prog-bar3"></div>
              </div>

              <div className="progress-det-flex-box">
                <div className="prog-info-box">
                  <div className="prog-dot-box-flex">
                    <div className="prog-dot-det-box"></div>
                    <span>Pending</span>
                  </div>
                  <h6>234</h6>
                </div>

                <div className="prog-info-box">
                  <div className="prog-dot-box-flex">
                    <div className="prog-dot-det-box prog-dot-det-box2"></div>
                    <span>Done</span>
                  </div>
                  <h6>65</h6>
                </div>

                <div className="prog-info-box">
                  <div className="prog-dot-box-flex">
                    <div className="prog-dot-det-box prog-dot-det-box3"></div>
                    <span>Completed</span>
                  </div>
                  <h6>150</h6>
                </div>
              </div>
            </div>

            <div className="left-ad-progress-bar-main">
              <h6>Todays orders</h6>

              <div className="ad-prog-bar-box">
                <div className="inner-prog-bar"></div>
              </div>

              <div className="ad-prog-bar-box">
                <div className="inner-prog-bar inner-prog-bar2"></div>
              </div>

              <div className="ad-prog-bar-box">
                <div className="inner-prog-bar inner-prog-bar3"></div>
              </div>

              <div className="progress-det-flex-box">
                <div className="prog-info-box">
                  <div className="prog-dot-box-flex">
                    <div className="prog-dot-det-box"></div>
                    <span>Pending</span>
                  </div>
                  <h6>234</h6>
                </div>

                <div className="prog-info-box">
                  <div className="prog-dot-box-flex">
                    <div className="prog-dot-det-box prog-dot-det-box2"></div>
                    <span>Processing</span>
                  </div>
                  <h6>65</h6>
                </div>

                <div className="prog-info-box">
                  <div className="prog-dot-box-flex">
                    <div className="prog-dot-det-box prog-dot-det-box3"></div>
                    <span>Delivered</span>
                  </div>
                  <h6>150</h6>
                </div>
              </div>
            </div>
          </div>

          <div className="right-graph-main-box">
            <div className="edit-main-box2">
              <div onClick={() => setEditBx(!editBx)} className="edit-btn2">
                <i class="fa-solid fa-ellipsis-vertical"></i>
              </div>

              <div
                className={
                  editBx ? "editable-box editableactive" : "editable-box"
                }
              >
                <span>Delete</span>
                <span>Edit</span>
              </div>
            </div>

            <div className="graph-top-flex-box">
              <div className="left-graph-title">
                <h6>Reservation Statistic</h6>
                <span>Lorem ipsum dolor sit amet</span>
              </div>

              <div className="right-graph-num-flex-box">
                <div className="graph-num-box">
                  <div className="graph-num-dot"></div>
                  <h5>549</h5>

                  <span>Check In</span>
                </div>

                <div className="graph-num-box">
                  <div className="graph-num-dot graph-num-dot2"> </div>
                  <h5>327</h5>
                  <span>Check Out</span>
                </div>
              </div>
            </div>

            <div className="graph-img">
              <img src="./images/customImg/graph-img.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminSecondComp;
