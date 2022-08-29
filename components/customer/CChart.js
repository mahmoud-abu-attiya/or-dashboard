// import dynamic from "next/dynamic";

// const ReactApexChart = dynamic(() => import("react-apexcharts"), {
//   ssr: false,
// });

// const Chat = () => {
//   // var options = {
//   //   series: [
//   //     {
//   //       name: "Net Profit",
//   //       data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
//   //     },
//   //     {
//   //       name: "Revenue",
//   //       data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
//   //     },
//   //     {
//   //       name: "Free Cash Flow",
//   //       data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
//   //     },
//   //   ],
//   //   chart: {
//   //     type: "bar",
//   //     height: 350,
//   //   },
//   //   plotOptions: {
//   //     bar: {
//   //       horizontal: false,
//   //       columnWidth: "55%",
//   //       endingShape: "rounded",
//   //     },
//   //   },
//   //   dataLabels: {
//   //     enabled: false,
//   //   },
//   //   stroke: {
//   //     show: true,
//   //     width: 2,
//   //     colors: ["transparent"],
//   //   },
//   //   xaxis: {
//   //     categories: [
//   //       "Feb",
//   //       "Mar",
//   //       "Apr",
//   //       "May",
//   //       "Jun",
//   //       "Jul",
//   //       "Aug",
//   //       "Sep",
//   //       "Oct",
//   //     ],
//   //   },
//   //   yaxis: {
//   //     title: {
//   //       text: "$ (thousands)",
//   //     },
//   //   },
//   //   fill: {
//   //     opacity: 1,
//   //   },
//   //   tooltip: {
//   //     y: {
//   //       formatter: function (val) {
//   //         return "$ " + val + " thousands";
//   //       },
//   //     },
//   //   },
//   // };
//   const data = {
//     series: [
//       {
//         name: "Net Profit",
//         data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
//       },
//       {
//         name: "Revenue",
//         data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
//       },
//       {
//         name: "Free Cash Flow",
//         data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
//       },
//     ],
//     chart: {
//       type: "bar",
//       height: 350,
//     },
//     plotOptions: {
//       bar: {
//         horizontal: false,
//         columnWidth: "55%",
//         endingShape: "rounded",
//       },
//     },
//     dataLabels: {
//       enabled: false,
//     },
//     stroke: {
//       show: true,
//       width: 2,
//       colors: ["transparent"],
//     },
//     xaxis: {
//       categories: [
//         "Feb",
//         "Mar",
//         "Apr",
//         "May",
//         "Jun",
//         "Jul",
//         "Aug",
//         "Sep",
//         "Oct",
//       ],
//     },
//     yaxis: {
//       title: {
//         text: "$ (thousands)",
//       },
//     },
//     fill: {
//       opacity: 1,
//     },
//     tooltip: {
//       y: {
//         formatter: function (val) {
//           return "$ " + val + " thousands";
//         },
//       },
//     },
//   };
//   return (
//     <div className="car chart">
//       <h2>Posts Overview</h2>
//       <small>
//         <span className="green">+10%</span> this month
//       </small>
//       <ReactApexChart
//         options={data.plotOptions}
//         series={data.series}
//         type="bars"
//         height={330}
//         // priority="true"
//         className="bord shadow mt-3"
//       />
//     </div>
//   );
// };

// export default Chat;
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const Chat = () => {
  const data = {
    series: [
      {
        name: "Net Profit",
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
      },
      {
        name: "Revenue",
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
      },
      {
        name: "Free Cash Flow",
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
        toolbar: {
          show: true,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: [
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
        ],
      },
      yaxis: {
        title: {
          text: "$ (thousands)",
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "$ " + val + " thousands";
          },
        },
      },
      colors: ["#3d052e", "#f2ba35", "#0ff"],
    },
  };
  return (
    <div className="car chart soon">
      <h2>Posts Overview</h2>
      <small>
        <span className="green">+10%</span> this day
      </small>
      <ReactApexChart
        options={data.options}
        series={data.series}
        type="bar"
        height={330}
        priority="true"
        className="bord shadow mt-3"
      />
    </div>
  );
};

export default Chat;
