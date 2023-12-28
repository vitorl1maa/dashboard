import { AlertOctagon, CloudCog, FileCheck2, Server, User } from "lucide-react";
import { useEffect, useState } from "react";
import { getRegister } from "../services/getRegister";

const StatusBar = () => {
  const [register, setRegister] = useState([]);

  useEffect(() => {
    getRegister().then((res) => {
      setRegister(res);
    });
  }, []);

  return (
    <header className="bg-white rounded shadow-lg w-full">
      <div>
        <p className="bg-blue-900 text-xl py-1 text-white px-5 rounded-t">
          Status
        </p>
        <nav className="h-24 flex justify-between">
          <div className="flex gap-2 items-center px-3">
            <span className=" rounded p-2 bg-yellow-400">
              <User size={32} color="#f2f2f2" />
            </span>
            <div>
              <p>Colaboradores</p>
              <span className="text-3xl">{register.colaboradores} </span>
            </div>
          </div>
          <div className="flex gap-2 items-center px-3">
            <span className=" rounded p-2 bg-blue-900">
              <FileCheck2 size={32} color="#f2f2f2" />
            </span>
            <div>
              <p>Marcações no dia</p>
              <span className="text-3xl">{register.marcacoesDia} </span>
            </div>
          </div>
          <div className="flex gap-2 items-center px-3">
            <span className=" rounded p-2 bg-blue-400">
              <CloudCog size={32} color="#f2f2f2" />
            </span>
            <div>
              <p>Status do Servidor</p>
              <span className="text-3xl">{register.statusServidor} </span>
            </div>
          </div>
          <div className="flex gap-2 items-center px-3">
            <span className=" rounded p-2 bg-green-500">
              <Server size={32} color="#f2f2f2" />
            </span>
            <div>
              <p>Equipamentos</p>
              <span className="text-3xl">4</span>
            </div>
          </div>
          <div className="flex gap-2 items-center px-3">
            <span className=" rounded p-2 bg-red-500">
              <AlertOctagon size={32} color="#f2f2f2" />
            </span>
            <div>
              <p>Falhas no dia</p>
              <span className="text-3xl">{register.falhas} </span>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default StatusBar;