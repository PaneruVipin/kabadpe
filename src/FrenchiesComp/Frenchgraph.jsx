import React, { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    date: "1",
    ord: 130,
    apnt: 150,
    amt: 100,
  },
  {
    date: "2",
    ord: 300,
    apnt: 230,
    amt: 200,
  },
  {
    date: "3",
    ord: 250,
    apnt: 80,
    amt: 400,
  },
  {
    date: "4",
    ord: 400,
    apnt: 300,
    amt: 600,
  },
  {
    date: "5",
    ord: 600,
    apnt: 445,
    amt: 800,
  },
  {
    date: "6",
    ord: 550,
    apnt: 375,
    amt: 1000,
  },
  {
    date: "7",
    ord: 650,
    apnt: 550,
    amt: 1000,
  },
  {
    date: "8",
    ord: 450,
    apnt: 285,
    amt: 1000,
  },
  {
    date: "9",
    ord: 750,
    apnt: 490,
    amt: 1000,
  },
  {
    date: "10",
    ord: 800,
    apnt: 360,
    amt: 1000,
  },
  {
    date: "11",
    ord: 1000,
    apnt: 700,
    amt: 1000,
  },
  {
    date: "12",
    ord: 970,
    apnt: 700,
    amt: 1000,
  },
];

const Frenchgraph = () => {
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

            <div className="left-ad-progress-bar-main mb-4">
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
              <h6>You are not authorize for this part</h6>

             
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
                <h6> 10 Days Appointments Growth</h6>
              </div>

              {/* <div className="right-graph-num-flex-box">
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
              </div> */}
            </div>

            <div className="area-char">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  width={500}
                  height={400}
                  data={data}
                  margin={{ top: 20, right: 0, left: 0, bottom: 20 }}
                >
                  <defs>
                    {/* <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#96d884" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#96d884" stopOpacity={0} />
                    </linearGradient> */}
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#d097ff" stopOpacity={0.2  } />
                      <stop offset="95%" stopColor="#d097ff" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis
                    dataKey="date"
                    axisLine={false}
                    textAnchor="end"
                  />
                  <YAxis dataKey="amt" axisLine={false} offset={0} />
                  <Tooltip />
                  {/* <Area
                    type="monotone"
                    dataKey="ord"
                    stroke="#96d884"
                    strokeWidth="4"
                    fillOpacity={1}
                    fill="url(#colorUv)"
                    activeDot={{ r: 10 }}
                  /> */}
                  <Area
                    type="monotone"
                    dataKey="apnt"
                    stroke="#b661fc"
                    strokeWidth="4"
                    fillOpacity={1}
                    fill="url(#colorPv)"
                    activeDot={{ r: 10 }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Frenchgraph;
