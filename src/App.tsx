import "./App.css";
import { Outlet } from "react-router";
import Sidebar from "./components/side-bar";

function App() {
  return (
    <>
      <main className="main">
        <aside className="aside-menu">
          <Sidebar />
        </aside>
        <section className="main-section">
          <Outlet />
        </section>
      </main>
    </>
  );
}

export default App;
