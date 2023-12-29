import { useEffect, useState } from "react";
import { getRegister } from "../services/getRegister";

interface TableProps {
  id: number;
  modelo: string;
  marca: string;
  descricao: string;
  ip: string;
  colaboradores: number;
  status: string;
}

const TableInfo = () => {
  const [tableInfo, setTableInfo] = useState<TableProps[]>([]);

  useEffect(() => {
    getRegister().then((res) => {
      setTableInfo(res.terminais);
    });
  }, []);

  return (
    <section className="bg-white rounded shadow-lg w-full">
      <p className="bg-blue-900 text-xl py-1 text-white px-5 rounded-t">
        Equipamentos
      </p>
      <table className="w-full">
        <thead>
          <tr className="flex justify-around text-center items-center p-4">
            <th className="w-1/6">CÓDIGO</th>
            <th className="w-1/6">DESCRIÇÃO</th>
            <th className="w-1/6">MARCA</th>
            <th className="w-1/6">MODELO</th>
            <th className="w-1/6">IP</th>
            <th className="w-1/6">COLABORADORES</th>
            <th className="w-1/6">STATUS</th>
          </tr>
        </thead>
        <tbody>
          {tableInfo.map((table) => (
            <tr
              className="flex justify-around w-full text-center border bottom-0 items-center p-4"
              key={table.id}
            >
              <td className="w-1/6">{table.id} </td>
              <td className="w-1/6">{table.descricao} </td>
              <td className="w-1/6">{table.marca} </td>
              <td className="w-1/6">{table.modelo} </td>
              <td className="w-1/6">{table.ip}</td>
              <td className="w-1/6">{table.colaboradores} </td>
              <td className="w-1/6">
                <span
                  className={`${
                    table.status == "ON-LINE" ? "bg-green-500" : "bg-yellow-400"
                  } w-25 rounded-full text-white  py-1 px-3 font-semibold`}
                >
                  {table.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default TableInfo;
