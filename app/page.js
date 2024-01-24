import Sidebar from "./component/Sidebar";
import Navbar from "./component/Navbar";

export default function Home() {
  return (
    <main className="m-0">
      <Sidebar/>
      <div>
        <Navbar/>  
      </div>
    </main>
  );
}
