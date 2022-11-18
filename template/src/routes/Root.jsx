import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <div style={{}}>
      <div
        id="sidebar"
        style={{
          width: "250px",
          height: "100vh",
          background: "lightgray",
          position: "fixed",
        }}
      >
        <h2 style={{ textAlign: "center" }}>React Start Kit</h2>
        <nav>
          <ul style={{ listStyle: "none" }}>
            <li>
              <a href="counter">Counter</a>
            </li>
            <li>
              <a href="todo">Todo</a>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail" style={{ marginLeft: "250px", padding: "12px" }}>
        <Outlet />
      </div>
    </div>
  );
}
