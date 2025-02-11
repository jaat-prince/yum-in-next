import Dashboard from "../app/components/home/Dashboard.jsx";
import Cate from "../app/components/home/Cate.jsx";
import Best from "../app/components/home/Best.jsx";

export default function Home() {
  return (
    <>
      <div className="w-full p-4 overflow-y-scroll no-scrollbar">
        <Dashboard />
        <Cate />
        <Best />
      </div>
    </>
  );
}
