import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
function App() {
  return (
    <>
      <div>
        <nav>
          <Link to="/users">Users</Link>
        </nav>
        <Outlet />
      </div>
    </>
  );
}

export default App;
