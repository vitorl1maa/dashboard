const TableInfo = () => {
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
            <th className="w-1/6">MODELO</th>
            <th className="w-1/6">IP</th>
            <th className="w-1/6">COLABORADORES</th>
            <th className="w-1/6">STATUS</th>
          </tr>
        </thead>
        <tbody>
          <tr className="flex justify-around w-full text-center border bottom-0 items-center p-4">
            <td className="w-1/6">2</td>
            <td className="w-1/6">TESTE</td>
            <td className="w-1/6">
              iDFace <br />
              Control ID
            </td>
            <td className="w-1/6">192.168.0.128</td>
            <td className="w-1/6">4</td>
            <td className="w-1/6">
              <span className="w-25 rounded-full text-white bg-yellow-400 py-1 px-3 font-semibold">
                OFF-LINE
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default TableInfo;
