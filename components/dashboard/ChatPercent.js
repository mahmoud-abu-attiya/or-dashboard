// import dynamic from "next/dynamic";
// import Link from "next/link";

// const ReactApexChart = dynamic(() => import("react-apexcharts"), {
//   ssr: false,
// });
// const ChatPercent = () => {
//   const data = {

//     series: [75],
//     options: {
//       chart: {
//         // height: 350,
//         width:"100%",
//         type: 'radialBar',
//         toolbar: {
//           show: true
//         }
//       },
//       plotOptions: {
//         radialBar: {
//           startAngle: -135,
//           endAngle: 225,
//            hollow: {
//             margin: 0,
//             size: '70%',
//             background: '#fff',
//             dropShadow: {
//               enabled: true,
//               top: 1,
//               left: 0,
//               blur: 2,
//               opacity: 0.1
//             }
//           },
//           track: {
//             background: '#fff',
//             strokeWidth: '30%',
//             margin: 0, // margin is in pixels
//             dropShadow: {
//               enabled: true,
//               top: 0,
//               left: 0,
//               blur: 2,
//               opacity: 0.1
//             }
//           },

//           dataLabels: {
//             show: true,
//             name: {
//               offsetY: -10,
//               show: true,
//               color: '#111',
//               fontSize: '17px'
//             },
//             value: {
//               formatter: function(val) {
//                 return parseInt(val);
//               },
//               color: '#111',
//               fontSize: '36px',
//               show: true,
//             }
//           }
//         }
//       },
//       fill: {
//         type: 'gradient',
//         gradient: {
//           shade: 'dark',
//           type: 'horizontal',
//           shadeIntensity: 0.5,
//           gradientToColors: ['#f2ba35'],
//           inverseColors: true,
//           stops: [0, 100]
//         }
//       },
//       stroke: {
//         lineCap: 'round'
//       },
//       labels: ['Percent'],
//     },

//   };
//   return (
//     <div className="car percent">
//       <h3>last project</h3>
//       <ReactApexChart options={data.options} series={data.series} type="radialBar" width="100%"/>
//       <Link href="/">
//         <a className="shadow-sm bord-2">View</a>
//       </Link>
//     </div>
//   )
// }

// export default ChatPercent

import React from "react";
import Link from "next/link";

const ChatPercent = () => {
  return (
    <div className="car clients-section">
      <h3>Clients Notes</h3>
      <Link href="/clients">
        <div className="client-section shadow-sm bord">
          <Link href="link">
            <a title="Page Link">
              <i className="fa fa-link"></i>
            </a>
          </Link>
          <h5>Client Name</h5>
          <div className="mark bord shadow-sm">!</div>
        </div>
      </Link>
      <Link href="/clients">
        <div className="client-section shadow-sm bord">
          <Link href="link">
            <a title="Page Link">
              <i className="fa fa-link"></i>
            </a>
          </Link>
          <h5>Client Name</h5>
          <div className="mark bord shadow-sm">!</div>
        </div>
      </Link>
      <Link href="/clients">
        <div className="client-section shadow-sm bord">
          <Link href="link">
            <a title="Page Link">
              <i className="fa fa-link"></i>
            </a>
          </Link>
          <h5>Client Name</h5>
          <div className="mark bord shadow-sm">!</div>
        </div>
      </Link>
      <Link href="/clients">
        <div className="client-section shadow-sm bord">
          <Link href="link">
            <a title="Page Link">
              <i className="fa fa-link"></i>
            </a>
          </Link>
          <h5>Client Name</h5>
          <div className="mark bord shadow-sm">!</div>
        </div>
      </Link>
    </div>
  );
};

export default ChatPercent;
