import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const Chat = () => {
  const data = {
    series: [
      {
        name: "Mobile apps",
        data: [500, 250, 300, 220, 500, 250, 300, 230, 300, 350, 250, 400],
      },
      {
        name: "Websites",
        data: [200, 230, 300, 350, 370, 420, 550, 350, 400, 500, 330, 550],
      },
    ],
    options: {
      chart: {
        type: "area",
        toolbar: {
          show: true,
        },
      },
      dataLabels: {
        enabled: false, //visiablty vales in chart line
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        
      },
      colors: ["#3d052e", "#f2ba35"],
    },
  };
  return (
    <div className='car chart'>
      <h2>Posts Overview</h2>
      <small><span className="green">+10%</span> this month</small>
      <ReactApexChart
        options={data.options}
        series={data.series}
        type="area"
        width={"100%"}
        height={330}
        priority="true"
        className="bord shadow mt-3"
      />
    </div>
  )
}

export default Chat