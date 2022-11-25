import { Link, Outlet } from "react-router-dom";

function Root() {
  return (
    <div>
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
              <Link to="counter">Counter</Link>
            </li>
            <li>
              <Link to="todo">Todo</Link>
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

export default Root;
