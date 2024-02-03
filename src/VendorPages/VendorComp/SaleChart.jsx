import React, { useEffect, useRef, useState } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

import { Chart } from "chart.js/auto";


const SaleChart = () => {
    const [chartActive , setChartActive] = useState('saleschart')
    const chartRef = useRef(null);
    const chartInstance =  useRef(null);

    useEffect(() => {
        if(chartInstance.current){
            chartInstance.current.destroy();
        }

        const myChartRef =  chartRef.current.getContext('2d');

        chartInstance.current = new Chart(myChartRef, {
            type : "pie",
            data : {
                labels : [ "Green Leaf Lettuce" , "Rainbow Chart" , "Clementine" , "Parsley" ],
                datasets : [
                    {
                        data : [ 260 , 176 , 230 , 250 ],
                        backgroundColor : [

                            "#fdd9f5" , '#dbf2fc' , '#dbf5ec' , '#ffe6de'
                            
                        ],
                    }
                ]
            }
        })

        return () => {

            if(chartInstance.current){
                chartInstance.current.destroy();
            }
            
        }
        
    }, [])
    
    
  const data = [
    {
      date: "01-28",
      saleAmnt: 1000,
      sales: 360.77,
      orders: 1,
      orderAmnt: 1,
    },

    {
      date: "01-29",
      saleAmnt: 2000,
      sales: 2701.7,
      orders: 1,
      orderAmnt: 2,
    },

    {
      date: "01-31",
      saleAmnt: 3000,
      sales: 3585.45,
      orders: 7,
      orderAmnt: 3,
    },

    {
      date: "02-05",
      saleAmnt: 4000,
      sales: 405.55,
      orders: 3,
      orderAmnt: 4,
    },

    {
      date: "02-09",
      saleAmnt: 5000,
      sales: 2540.87,
      orders: 1.5,
      orderAmnt: 5,
    },

    {
      date: "02-11",
      saleAmnt: 6000,
      sales: 1200.87,
      orders: 4,

      orderAmnt: 6,
    },
  ];

  return (
    <>
      <section className="sale-chart-comp">
        <div className="sale-chart-grid">
          <div className="left-weekly-sale-main">
            <h6>Weekly Sales</h6>

            <div className="sale-ord-btn-flex">
              <button onClick={() => setChartActive('saleschart')} className={chartActive === 'saleschart' ? "sale-btn btnactive" : "sale-btn"}>Sales</button>

              <button onClick={() => setChartActive('orderschart')} className={ chartActive === 'orderschart' ? "ord-btn ordbtnactive" : "ord-btn"}>Orders</button>
            </div>

          { chartActive === 'saleschart' ? <div className="Sale-Chart">
              <div className="legent">
                <div className="legend-stroke"></div>
                <span>Sales</span>
              </div>

              <ResponsiveContainer width="100%" aspect={1.7}>
                <LineChart
                  width={500}
                  height={400}
                  data={data}
                  margin={{ top: 20, right: 0, left: 0, bottom: 20 }}
                >
                  <XAxis
                    dataKey="date"
                    interval={"preserveStartEnd"}
                    axisLine={false}
                    textAnchor="end"
                  />
                  <YAxis dataKey="saleAmnt" axisLine={false} offset={0} />
                  <Tooltip />
                  <CartesianGrid strokeDasharray="2.2" />
                  <Line
                    dataKey="sales"
                    stroke="#109d54"
                    strokeWidth={2.5}
                    activeDot={{ r: 8 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div> : null}

          { chartActive === 'orderschart' ? <div className="Sale-Chart ord-chart">
              <div className="legent legent2">
                <div className="legend-stroke legend-stroke2"></div>
                <span>Orders</span>
              </div>

              <ResponsiveContainer width="100%" aspect={1.7}>
                <LineChart
                  width={500}
                  height={400}
                  data={data}
                  margin={{ top: 20, right: 0, left: 0, bottom: 20 }}
                >
                  <XAxis
                    dataKey="date"
                    interval={"preserveStartEnd"}
                    axisLine={false}
                    textAnchor="end"
                  />
                  <YAxis dataKey="orderAmnt" axisLine={false} offset={0} />
                  <Tooltip />
                  <CartesianGrid strokeDasharray="2.2" />
                  <Line
                    dataKey="orders"
                    stroke="#f16c3b"
                    strokeWidth={2.5}
                    activeDot={{ r: 8 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div> : null}
          </div>

          <div className="left-weekly-sale-main right-selling-product-bx">

            <h6>BestSelling Products</h6>

            <div className="chart-flex-bx">

            <canvas ref={chartRef} style={{width: "100px" , height : "100px"}} />
            </div>
          </div>
          
        </div>
      </section>
    </>
  );
};

export default SaleChart;
