import Dashboard from "../app/components/home/Dashboard.jsx";
import Cate from "../app/components/home/Cate.jsx";
import Best from "../app/components/home/Best.jsx";
import Table from "../app/components/home/Table.jsx";

export default function Home() {
  return (
    <>
      <div className="w-full p-4 overflow-y-scroll no-scrollbar">
        <Dashboard />
        <div className="grid grid-cols-1 2xl:grid-cols-2 gap-6">
          <div>
            <Cate />
            <Best />
          </div>
          <Table />
        </div>
      </div>
    </>
  );
}
