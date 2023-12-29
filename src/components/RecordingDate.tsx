import Chart from "react-apexcharts";
import { getRegister } from "../services/getRegister";
import { useEffect, useState } from "react";
import { formatDate } from "../utils/formatDate";

interface RecordingProps {
  marcacoes: [];
  data: string;
}

const RecordingDate = () => {
  const [dateInfo, setDateInfo] = useState<RecordingProps[]>([]);
  const dateLog = dateInfo.slice().reverse();

  useEffect(() => {
    getRegister().then((res) => {
      setDateInfo(res.marcacoes);
    });
  }, []);

  const options = {
    xaxis: {
      categories: dateLog.map((date) => formatDate(date.data)),
    },
    yaxis: {
      tooltip: {
        enabled: false,
      },
    },
  };

  const series = [
    {
      name: "Marcações",
      data: dateInfo.map((date) => date.marcacoes),
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
