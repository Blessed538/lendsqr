import "./App.scss";
import Dashboard from "./pages/dashboard/Dashboard";
import Layout from "./components/layout/Layout";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import User from "./pages/user/User";
function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="users/:id" element={<User />} />

          {/* <Route path="*" element={<Login />} /> */}
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
