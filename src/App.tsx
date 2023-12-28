import RecordingDate from "./components/RecordingDate";
import StatusBar from "./components/StatusBar";
import TableInfo from "./components/TableInfo";

function App() {
  return (
    <main className="w-full  flex flex-col gap-8 p-5 bg-[#f2f2f2] ">
      <StatusBar />
      <RecordingDate />
      <TableInfo />
    </main>
  );
}

export default App;
