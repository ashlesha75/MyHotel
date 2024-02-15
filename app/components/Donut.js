'use client'
import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import axios from "axios";

function Donut() {
  const [summaryData, setSummaryData] = useState({
    cashAmount: 0,
    dueAmount: 0,
    onlinePaymentAmount: 0,
    complimentaryAmount: 0,
    discount: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/order/summary");
        const data = response.data;

        // Round the values
        data.cashAmount = Math.round(parseFloat(data.cashAmount));
        data.dueAmount = Math.round(parseFloat(data.dueAmount));
        data.onlinePaymentAmount = Math.round(parseFloat(data.onlinePaymentAmount));
        data.complimentaryAmount = Math.round(parseFloat(data.complimentaryAmount));
        data.discount = Math.round(parseFloat(data.discount));

        setSummaryData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to ensure the effect runs only once on component mount

  return (
    <React.Fragment>
      <div className="container-fluid rounded-md">
        {/* <h2>Donut</h2> */}
        <Chart
          type="donut"
          width={430}
          height={400}
          series={[summaryData.cashAmount, summaryData.dueAmount, summaryData.onlinePaymentAmount, summaryData.complimentaryAmount, summaryData.discount]}
          options={{
            title: {
              text: "Transactions",
            },
            labels: ["Cash", "Credit", "Online", "Complimentary", "Discount"],
            plotOptions: {
              pie: {
                donut: {
                  labels: {
                    show: true,
                    align: 'center', // Align labels to the center
                    total: {
                      show: true,
                      fontSize: 20,
                      color: "blue",
                      formatter: function (w) {
                        return "₹" + w.globals.seriesTotals.reduce((a, b) => a + b, 0)
                        // .toLocaleString('en-IN', { style: 'currency', currency: 'INR' });
                      }
                    },
                  },
                },
              },
            },
            dataLabels: {
              enabled: false,
            },
            colors: ["#ff9900", "#3366cc", "#4CAF50", "#FFC107", "#9E9E9E"], // Customize these colors as needed
            datalabels: {
            },
          }}
          style={{ cursor: "pointer" }}
        />
      </div>
    </React.Fragment>
  );
}

export default Donut;
