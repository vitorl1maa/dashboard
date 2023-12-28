import Chart from "react-apexcharts";

const RecordingDate = () => {
  const options = {
    xaxis: {},
    yaxis: {
      tooltip: {
        enabled: true,
      },
    },
  };

  const series = [
    {
      name: "sales",
      data: [
        {
          x: "2019/01/01",
          y: 400,
        },
        {
          x: "2019/04/01",
          y: 430,
        },
        {
          x: "2019/07/01",
          y: 448,
        },
        {
          x: "2019/10/01",
          y: 470,
        },
        {
          x: "2020/01/01",
          y: 540,
        },
        {
          x: "2020/04/01",
          y: 580,
        },
        {
          x: "2020/07/01",
          y: 690,
        },
        {
          x: "2020/10/01",
          y: 690,
        },
      ],
    },
  ];

  return (
    <section className="-white rounded shadow-lg w-full">
      <p className="bg-blue-900 text-xl py-1 text-white px-5 rounded-t">
        Marcações nos últimos 7 dias
      </p>
      <div className="flex justify-center py-5">
        <Chart
          options={options}
          series={series}
          type="bar"
          width={1000}
          height={600}
        />
      </div>
    </section>
  );
};

export default RecordingDate;
